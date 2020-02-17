import React from "react";
import { darken } from "polished";

import { Mode } from "lib/game";

import styled, { getColor, getShadow, getRadius } from "ui/styled";

import { Color } from "ui/theme";
import { Clamp, FOOTER_HEIGHT } from "ui/components/core";
import Github from "ui/components/Github";
import { ReactComponent as EyeIcon } from "assets/eye.svg";
import { ReactComponent as FlagIcon } from "assets/flag.svg";

const Eye = styled(EyeIcon)`
  width: 1em;
  height: 1em;
`;

const Flag = styled(FlagIcon)`
  width: 1em;
  height: 1em;
`;

const Circle = styled.div`
  border-radius: ${getRadius("round")};
  background-color: ${getColor("gray")};
  width: 1.4em;
  height: 1.4em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em;
`;

export const Button = styled.button<{
  color: Color;
  side: "left" | "right";
  active?: boolean;
}>`
    border: none;
    background-color: ${p =>
      p.active ? getColor(p.color)(p) : darken(0.5, getColor(p.color)(p))};
    height: 2.1em;
    width: 2.8em;
    ${p => `
      border-top-${p.side}-radius: ${p.theme.radii.xxxl};
      border-bottom-${p.side}-radius: ${p.theme.radii.xxxl};
    `}
    box-shadow: ${getShadow(p => (p.active ? "inset" : "default"))};
    outline: none;
    transition: all .1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${FOOTER_HEIGHT};
  background: ${getColor("dark")};
  color: ${getColor("white")};
  box-shadow: ${getShadow("default")};
  position: fixed;
  bottom: 0;
`;

const Footer: React.FC<{
  onToggleGameMode(): void;
  gameMode: Mode;
}> = props => {
  return (
    <Root>
      <Clamp>
        <Github />
        <ButtonGroup>
          <Button
            side="left"
            color="white"
            active={props.gameMode === "flag"}
            onClick={props.onToggleGameMode}
            aria-label="Toggle game mode"
          >
            <Circle>
              <Flag />
            </Circle>
          </Button>
          <Button
            side="right"
            color="white"
            active={props.gameMode === "reveal"}
            onClick={props.onToggleGameMode}
            aria-label="Toggle game mode"
          >
            <Circle>
              <Eye />
            </Circle>
          </Button>
        </ButtonGroup>
      </Clamp>
    </Root>
  );
};

export default Footer;
