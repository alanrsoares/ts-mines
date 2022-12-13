import { useCallback, FC } from "react";
import tw from "tailwind-styled-components";

import { Tile } from "lib/game";
import { Cell, Matrix } from "lib/Grid";

import GridTile from "./GridTile";

export const GridContainer = tw.div`
  flex flex-col
`;

export const GridRow = tw.div`
  flex
`;

type Props = {
  grid: Matrix<Tile>;
  onTileClick(cell: Cell<Tile>): void;
  onTileLongPress(cell: Cell<Tile>): void;
  activeCell?: Cell<Tile>;
};

const GridComponent: FC<Props> = (props) => {
  const handleClick = useCallback(
    (cell: Cell<Tile>) => () => props.onTileClick(cell),
    [props]
  );

  const handleLongPress = useCallback(
    (cell: Cell<Tile>) => () => props.onTileLongPress(cell),
    [props]
  );

  return (
    <GridContainer>
      {props.grid.map((row, y) => (
        <GridRow key={`row-${y}`}>
          {row.map((cell, x) => (
            <GridTile
              key={`tile-${x}`}
              onClick={handleClick(cell)}
              onLongPress={handleLongPress(cell)}
              {...cell.value}
              active={
                cell.row === props.activeCell?.row &&
                cell.column === props.activeCell?.column
              }
            />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default GridComponent;
