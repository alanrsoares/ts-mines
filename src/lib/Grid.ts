export type FillFn<T> = (cell: Cell<T>, previousValue?: T) => T;

export interface Cell<T> {
  row: number;
  column: number;
  value?: T;
}

export type Row<T> = Cell<T | undefined>[];

export type Matrix<T> = Row<T>[];

const isBetween = (min: number, max: number, value: number) =>
  value >= min && value < max;

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
    const rows: Matrix<T> = [];

    for (let y = 0; y < size; y++) {
      const row: Row<T> = [];

      for (let x = 0; x < size; x++) {
        const value =
          typeof fill === "function"
            ? (fill as FillFn<T>)({ row: y, column: x })
            : fill;

        row.push({ row: y, column: x, value });
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

  public static fromSeed<U>(matrix: Matrix<U>) {
    return Grid.make<U>(matrix.length).withSeed(matrix);
  }

  public withSeed(matrix: Matrix<T>) {
    this._grid = matrix;

    return this;
  }

  public snapshot() {
    return this._grid.slice();
  }

  public updateCell(row: number, column: number, fill: FillFn<T> | T): Grid<T> {
    const previous = this.getCell(row, column);

    const value =
      typeof fill === "function"
        ? (fill as FillFn<T>)({ row, column }, previous.value)
        : fill;

    this._grid[row][column] = { row, column, value };

    return this;
  }

  public getCell = (row: number, column: number) => {
    if (!isOutOfBounds({ row, column }, this._size)) {
      return this._grid[row][column];
    }

    throw new Error(`Invalid cell coordinates: row: ${row}; column: ${column}`);
  };

  public getCellNeighbours = (row: number, column: number): Row<T> => {
    const neighbourCoordinates: Row<T> = [
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
      .map(cell => this.getCell(cell.row, cell.column));
  };

  public map<U>(fn: (cell: Cell<T | undefined>, self: Grid<T>) => Cell<U>) {
    const nextMatrix: Matrix<U> = this._grid.map(cells =>
      cells.map(x => fn(x, this))
    );

    return Grid.fromSeed(nextMatrix);
  }
}
