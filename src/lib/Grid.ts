import { isBetween, memoize } from "./utils";
export interface Coordinates {
  row: number;
  column: number;
}

export interface Dimensions {
  rows: number;
  columns: number;
}

export type FillFn<T> = (cell: Coordinates, previousValue?: T) => T;

export interface Cell<T> extends Coordinates {
  value: T;
}

export type Row<T> = Cell<T>[];

export type Matrix<T> = Row<T>[];

export const isIndexOutOfBounds = (value: number, gridSize: number) =>
  !isBetween(0, gridSize, value);

export const isOutOfBounds = (
  cell: { row: number; column: number },
  dimensions: Dimensions
) =>
  isIndexOutOfBounds(cell.row, dimensions.rows) ||
  isIndexOutOfBounds(cell.column, dimensions.columns);

export default class Grid<T = undefined> {
  private _dimensions: Dimensions = {
    rows: 0,
    columns: 0,
  };
  private _grid: Matrix<T> = [];

  constructor(seed: Matrix<T>);
  constructor(dimensions: Dimensions, fill: FillFn<T> | T);
  constructor(...args: any[]) {
    if (args.length === 1 && Array.isArray(args[0])) {
      this._grid = args[0] as Matrix<T>;

      const dimensions: Dimensions = {
        rows: this._grid.length,
        columns: this._grid[0].length,
      };

      this._dimensions = dimensions;

      return this;
    }

    if (typeof args[0] === "object" && args[0] !== null) {
      const dimensions = args[0] as Dimensions;
      const fill = args[1] as FillFn<T>;

      const rows: Matrix<T> = [];

      for (let y = 0; y < dimensions.rows; y++) {
        const row: Row<T> = [];

        for (let x = 0; x < dimensions.columns; x++) {
          const value =
            typeof fill === "function"
              ? (fill as FillFn<T>)({
                  row: y,
                  column: x,
                })
              : fill;

          row.push({ row: y, column: x, value });
        }

        rows.push(row);
      }

      this._dimensions = dimensions;
      this._grid = rows;

      return this;
    }

    throw new Error(`Invalid argument: ${args[0]}`);
  }

  public static make<T>(seed: Matrix<T>): Grid<T>;
  public static make<T>(dimensions: Dimensions, fill: FillFn<T> | T): Grid<T>;
  public static make<T>(...args: any[]): Grid<T> {
    return new Grid(args[0], args[1]);
  }

  public static from<U>(matrix: Matrix<U>) {
    return new Grid(matrix);
  }

  public withSeed(matrix: Matrix<T>) {
    this._grid = matrix;

    return this;
  }

  public get snapshot() {
    return this._grid.slice();
  }

  public updateCell(
    { row, column }: Coordinates,
    fill: FillFn<T> | T
  ): Grid<T> {
    const previous = this.getCell({ row, column });

    const value =
      typeof fill === "function"
        ? (fill as FillFn<T>)({ row, column }, previous.value)
        : fill;

    this._grid[row][column] = { row, column, value };

    return this;
  }

  public getCell({ row, column }: Coordinates) {
    if (!isOutOfBounds({ row, column }, this._dimensions)) {
      return this._grid[row][column];
    }

    throw new Error(`Invalid cell coordinates: row: ${row}; column: ${column}`);
  }

  public getNeighborsCoordinates = memoize(({ row, column }: Coordinates) => {
    const coordinates: Coordinates[] = [];

    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        if (y === 0 && x === 0) {
          continue;
        }

        coordinates.push({
          row: row + y,
          column: column + x,
        });
      }
    }

    return coordinates;
  });

  public getCellNeighbors({ row, column }: Coordinates): Row<T> {
    const coordinates = this.getNeighborsCoordinates({ row, column });

    return coordinates.reduce<Row<T>>((acc, cell) => {
      if (!isOutOfBounds(cell, this._dimensions)) {
        return [...acc, this.getCell(cell)];
      }
      return acc;
    }, []);
  }

  public map<U>(fn: (value: T, cell: Cell<T>, self: Grid<T>) => U) {
    const nextMatrix: Matrix<U> = this._grid.map((cells) =>
      cells.map((cell) => ({ ...cell, value: fn(cell.value, cell, this) }))
    );

    return Grid.from(nextMatrix);
  }
}
