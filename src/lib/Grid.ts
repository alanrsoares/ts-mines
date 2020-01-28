export function makeGrid() {}

export type Row<T> = (T | undefined)[];

export type Matrix<T> = Row<T>[];

export type FillFn<T> = (row: number, column: number, previousValue?: T) => T;

export interface Cell<T> {
  row: number;
  column: number;
  value?: T;
}

const isBetween = (min: number, max: number, value: number) =>
  value >= min && value <= max;

const isIndexOutOfBounds = (value: number, gridSize: number) =>
  !isBetween(0, gridSize, value);

const isOutOfBounds = (
  cell: { row: number; column: number },
  gridSize: number
) =>
  isIndexOutOfBounds(cell.row, gridSize) ||
  isIndexOutOfBounds(cell.column, gridSize);

export default class Grid<T = undefined> {
  private _size = 0;
  private _grid: Matrix<T> = [];

  constructor(size: number, fill?: FillFn<T> | T) {
    const rows: Matrix<T> = new Array(size);

    for (let y = 0; y < size; y++) {
      const row: Row<T> = new Array(size);

      for (let x = 0; x < size; x++) {
        const value =
          typeof fill === "function" ? (fill as FillFn<T>)(y, x) : fill;

        row.push(value);
      }

      rows.push(row);
    }

    this._size = size;
    this._grid = rows;

    return this;
  }

  public static make<T>(size: number, fill?: FillFn<T> | T): Grid<T> {
    return new Grid(size, fill);
  }

  public updateCell(row: number, column: number, fill: FillFn<T> | T): Grid<T> {
    const previousValue = this.getCell(row, column);

    const value =
      typeof fill === "function"
        ? (fill as FillFn<T>)(row, column, previousValue)
        : fill;

    this._grid[row][column] = value;

    return this;
  }

  public getCell(row: number, column: number) {
    if (!isOutOfBounds({ row, column }, this._size)) {
      return this._grid[row][column];
    }

    throw new Error(`Invalid cell coordinates: row: ${row}; column: ${column}`);
  }

  public getCellNeighbours(row: number, column: number): Cell<T>[] {
    const neighbourCoordinates: Cell<T>[] = [
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
      .filter(cell => !isOutOfBounds(cell, this._size))
      .map(coords => ({
        row: coords.row,
        column: coords.column,
        value: this.getCell(coords.row, coords.column)
      }));
  }
}
