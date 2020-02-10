import React, { useCallback } from "react";

import styled from "ui/styled";
import { Tile } from "lib/game";
import { Matrix, Cell } from "lib/Grid";

import GridTile from "./GridTile";

const assets = {
  mine: require("assets/mine.svg")
};

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridRow = styled.div`
  display: flex;
`;

export const Mine = styled.img`
  width: 1.4em;
  height: 1.4em;
`;

interface Props {
  grid: Matrix<Tile>;
  onTileClick(cell: Cell<Tile>): void;
  activeCell?: Cell<Tile>;
}

const GridComponent: React.FC<Props> = props => {
  const handleCellClick = useCallback(
    (cell: Cell<Tile>) => () => props.onTileClick(cell),
    [props]
  );

  return (
    <GridContainer>
      {props.grid.map((row, y) => (
        <GridRow key={y}>
          {row.map((cell, x) => (
            <GridTile
              key={x}
              kind={cell.value.kind}
              onClick={handleCellClick(cell)}
              active={
                cell.row === props.activeCell?.row &&
                cell.column === props.activeCell?.column
              }
              revealed={cell.value.revealed}
            >
              {cell.value.kind === "mine" ? (
                <Mine alt="mine" src={assets.mine} />
              ) : (
                cell.value.surroundingMines
              )}
            </GridTile>
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default GridComponent;
