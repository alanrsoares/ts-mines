import React from "react";
import styled, { getShadow, getRadius, getColor } from "ui/styled";

import * as Game from "lib/game";

const numberColors: Record<number, string> = {
  0: "white",
  1: "blue",
  2: "green",
  3: "red",
  4: "darkblue",
  5: "darkgreen",
  6: "darkred",
  7: "purple",
  8: "darkpurple"
};

interface Props {
  kind?: Game.TileKind;
  active?: boolean;
  revealed?: boolean;
  onClick?: () => void;
}

const GridTileContainer = styled.div<Props>`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${getShadow(p => (p.revealed ? "none" : "default"))};
  border-radius: ${getRadius("lg")};
  margin: 0.2em;
  padding: 0.2em;
  background: ${getColor(p =>
    p.revealed ? (p.kind === "mine" && p.active ? "negative" : "white") : "gray"
  )};
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  user-select: none;
  ${p =>
    // dynamic number-color mapping
    typeof p.children === "number"
      ? `color:  ${numberColors[p.children]}`
      : undefined};
`;

const GridTile: React.FC<Props> = props => {
  return (
    <GridTileContainer onClick={props.onClick} {...props} active={props.active}>
      {props.revealed ? props.children : null}
    </GridTileContainer>
  );
};

export default GridTile;
