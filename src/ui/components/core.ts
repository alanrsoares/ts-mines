import { darken } from "polished";
import styled, { getColor, getFontFamily, getShadow } from "ui/styled";
import { Color } from "ui/theme";

export const BOARD_WIDTH = "1151.42px";
export const BOARD_HEIGHT = "893px";

export const Root = styled.div`
  font-family: ${getFontFamily("default")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background: ${getColor("muted")};
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3em;
  background: ${getColor("gray")};
  box-shadow: ${getShadow("default")};
`;

export const Clamp = styled.div`
  display: flex;
  width: ${BOARD_WIDTH};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${BOARD_WIDTH}) {
    width: 100vw;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

export const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("secondary")};
  font-weight: 700;
  font-size: 1.8em;
  min-width: 5em;
`;

export const StatusDisplay = styled.div`
  background: ${getColor("shadow")};
  box-shadow: ${getShadow("default")};
  border-radius: 50%;
  width: 2.8em;
  height: 2.8em;
  margin-top: 0.8em;
  padding: 0.4em;
`;

export const Content = styled.div`
  display: flex;
  max-width: calc(100vw - 1em);
  max-height: calc(100vh - 7em);
  margin-top: 1em;
  margin-bottom: 1em;
  -ms-overflow-style: none;
  @media screen and (max-height: ${BOARD_HEIGHT}) {
    overflow: scroll;
  }
  @media screen and (max-width: ${BOARD_WIDTH}) {
    overflow: scroll;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3em;
  background: ${getColor("dark")};
  color: ${getColor("white")};
  box-shadow: ${getShadow("default")};
  position: fixed;
  bottom: 0;
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
