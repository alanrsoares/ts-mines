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

const isBetween = (min: number, max: number, value: number) =>
  value >= min && value < max;

const isIndexOutOfBounds = (value: number, gridSize: number) =>
  !isBetween(0, gridSize, value);

const isOutOfBounds = (
  cell: { row: number; column: number },
  dimensions: Dimensions
) =>
  isIndexOutOfBounds(cell.row, dimensions.rows) ||
  isIndexOutOfBounds(cell.column, dimensions.columns);

export default class Grid<T = undefined> {
  private _dimensions: Dimensions = {
    rows: 0,
    columns: 0
  };
  private _grid: Matrix<T> = [];

  constructor(dimensions: Dimensions, fill: FillFn<T> | T) {
    const rows: Matrix<T> = [];

    for (let y = 0; y < dimensions.rows; y++) {
      const row: Row<T> = [];

      for (let x = 0; x < dimensions.columns; x++) {
        const value =
          typeof fill === "function"
            ? (fill as FillFn<T>)({
                row: y,
                column: x
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

  public static make<T>(dimensions: Dimensions, fill: FillFn<T> | T): Grid<T> {
    return new Grid(dimensions, fill);
  }

  public static from<U>(matrix: Matrix<U>) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    return Grid.make<U>({ rows, columns }, (undefined as any) as U).withSeed(
      matrix
    );
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

  public getCellNeighbours({ row, column }: Coordinates): Row<T> {
    const neighbourCoordinates = [
      // top-left
      { row: row - 1, column: column - 1 },
      // top-middle
      { row: row - 1, column },
      // top-right
      { row: row - 1, column: column + 1 },
      // middle-left
      { row, column: column - 1 },
      // middle-right
      { row, column: column + 1 },
      // bottom-left
      { row: row + 1, column: column - 1 },
      // bottom-middle
      { row: row + 1, column },
      // bottom-right
      { row: row + 1, column: column + 1 }
    ];

    return neighbourCoordinates
      .filter(cell => !isOutOfBounds(cell, this._dimensions))
      .map(cell => this.getCell(cell));
  }

  public map<U>(fn: (value: T, cell: Cell<T>, self: Grid<T>) => U) {
    const nextMatrix: Matrix<U> = this._grid.map(cells =>
      cells.map(cell => ({ ...cell, value: fn(cell.value, cell, this) }))
    );

    return Grid.from(nextMatrix);
  }
}
