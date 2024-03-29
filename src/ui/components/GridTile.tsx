import { omit } from "rambda";
import { useMemo } from "react";
import { css } from "styled-components";

import { ReactComponent as FlagIcon } from "assets/flag.svg";
import { ReactComponent as MineIcon } from "assets/mine.svg";
import { Tile } from "lib/game";
import { useLongPress } from "lib/hooks";
import styled, {
  getAnimation,
  getColor,
  getRadius,
  getShadow,
} from "ui/styled";

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

export const NUMBER_COLORS: Record<number, string> = {
  0: "white",
  1: "blue",
  2: "green",
  3: "red",
  4: "darkblue",
  5: "darkgreen",
  6: "darkred",
  7: "purple",
  8: "darkpurple",
};

type Props = Tile & {
  onLongPress(): void;
  onClick(): void;
  active?: boolean;
};

const GridTileContainer = styled.button<Omit<Props, "onLongPress">>`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${getShadow(({ revealed }) => (revealed ? "none" : "default"))};
  border-radius: ${getRadius("lg")};
  margin: 0.2rem;
  padding: 0.2rem;
  background: ${getColor(({ revealed, kind, active }) =>
    revealed ? (kind === "mine" && active ? "negative" : "white") : "gray"
  )};
  appearance: none;
  border: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  user-select: none;
  outline: none;
  cursor: ${({ active }) => (active ? "auto" : "pointer")};
  ${({ children }) =>
    // dynamic number-color mapping
    typeof children === "number"
      ? css`
          color: ${NUMBER_COLORS[children]};
        `
      : undefined};
  :active {
    opacity: 0.8;
    box-shadow: 0 0 0 0.125rem rgba(0, 0, 0, 0.2);
  }
`;

const GridTile: React.FC<Props> = (props) => {
  const content = useMemo(() => {
    if (props.defused) {
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
