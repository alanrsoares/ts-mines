import React, { useCallback } from "react";

import styled from "ui/styled";
import { Tile } from "lib/game";
import { Matrix, Cell } from "lib/Grid";

import GridTile from "./GridTile";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridRow = styled.div`
  display: flex;
`;

interface Props {
  grid: Matrix<Tile>;
  onTileClick(cell: Cell<Tile>): void;
  onTileLongPress(cell: Cell<Tile>): void;
  activeCell?: Cell<Tile>;
}

const GridComponent: React.FC<Props> = props => {
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
        <GridRow key={y}>
          {row.map((cell, x) => (
            <GridTile
              key={x}
              {...cell.value}
              active={
                cell.row === props.activeCell?.row &&
                cell.column === props.activeCell?.column
              }
              onClick={handleClick(cell)}
              onLongPress={handleLongPress(cell)}
            />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default GridComponent;
