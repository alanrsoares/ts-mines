import React, { useMemo } from "react";
import omit from "ramda/es/omit";

import { Tile } from "lib/game";
import { useLongPress } from "lib/hooks";

import styled, {
  getShadow,
  getRadius,
  getColor,
  getAnimation
} from "ui/styled";

import { ReactComponent as MineIcon } from "assets/mine.svg";
import { ReactComponent as FlagIcon } from "assets/flag.svg";

export const Mine = styled(MineIcon)`
  width: 1.4rem;
  height: 1.4rem;
  animation: ${getAnimation("appear")} 0.2s ease-in-out;
`;

export const Flag = styled(FlagIcon)`
  width: 1.4rem;
  height: 1.4rem;
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

interface Props extends Tile {
  onLongPress(): void;
  onClick(): void;
  active?: boolean;
}

const GridTileContainer = styled.div<Omit<Props, "onLongPress">>`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${getShadow(props => (props.revealed ? "none" : "default"))};
  border-radius: ${getRadius("lg")};
  margin: 0.2rem;
  padding: 0.2rem;
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

  const longPressProps = useLongPress(props.onLongPress, 400);

  return (
    <GridTileContainer
      {...omit(["onLongPress"], props)}
      {...longPressProps}
      active={props.active}
    >
      {content}
    </GridTileContainer>
  );
};

export default GridTile;
