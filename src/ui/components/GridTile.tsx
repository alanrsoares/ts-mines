import React, { useMemo } from "react";

import styled, {
  getShadow,
  getRadius,
  getColor,
  getAnimation
} from "ui/styled";
import * as Game from "lib/game";

import { ReactComponent as MineIcon } from "assets/mine.svg";
import { ReactComponent as FlagIcon } from "assets/flag.svg";

export const Mine = styled(MineIcon)`
  width: 1.4em;
  height: 1.4em;
  animation: ${getAnimation("appear")} 0.2s ease-in-out;
`;

export const Flag = styled(FlagIcon)`
  width: 1.4em;
  height: 1.4em;
  animation: ${getAnimation("appear")} 0.2s ease-in-out;
`;

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

interface Props extends Game.Tile {
  active?: boolean;
  onClick?: () => void;
}

const GridTileContainer = styled.div<Props>`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${getShadow(props => (props.revealed ? "none" : "default"))};
  border-radius: ${getRadius("lg")};
  margin: 0.2em;
  padding: 0.2em;
  background: ${getColor(props =>
    props.revealed
      ? props.kind === "mine" && props.active
        ? "negative"
        : "white"
      : "gray"
  )};
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  user-select: none;
  ${props =>
    // dynamic number-color mapping
    typeof props.children === "number"
      ? `color:  ${numberColors[props.children]}`
      : undefined};
`;

const GridTile: React.FC<Props> = props => {
  const content = useMemo(() => {
    if (props.flagged) {
      return <Flag />;
    }
    if (!props.revealed || props.kind === "safe") {
      return null;
    }

    switch (props.kind) {
      case "empty":
        return props.surroundingMines;
      case "mine":
        return <Mine />;
    }
  }, [props]);
  return (
    <GridTileContainer onClick={props.onClick} {...props} active={props.active}>
      {content}
    </GridTileContainer>
  );
};

export default GridTile;
