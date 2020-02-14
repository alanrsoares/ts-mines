import styled, {
  getColor,
  getFontFamily,
  getShadow,
  getRadius
} from "ui/styled";
import { Color } from "ui/theme";

import { ReactComponent as Github } from "assets/github.svg";

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
`;

export const Score = styled.div`
  font-family: ${getFontFamily("display")};
  font-weight: 700;
  font-size: 1em;
  border-radius: ${getRadius("lg")};
  padding: 0.2em 0.4em;
  background: ${getColor("black")};
  color: palegoldenrod;
  border: solid 2px palegoldenrod;
  box-shadow: ${getShadow("default")};
  display: flex;
  align-items: center;
`;

export const ScoreLabel = styled.span`
  color: ${getColor("muted")};
  margin-right: 0.3em;
  font-size: 0.9em;
  font-family: ${getFontFamily("display")};
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

export const GithubBadge = styled.a`
  border-radius: ${getRadius("xxxl")};
  color: ${getColor("secondary")};
  background: ${getColor("white")};
  display: flex;
  padding: 0.3em 0.4em;
  width: 12.3em;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${getShadow("default")};
  font-weight: 700;
  text-decoration: none;
`;

export const GithubIcon = styled(Github)`
  height: 1.6em;
  width: 1.6em;
`;

export const Button = styled.button<{
  color: Color;
  side: "left" | "right";
  active?: boolean;
}>`
  border: none;
  background-color: ${getColor(props => props.color)};
  height: 2.1em;
  width: 2.8em;
  ${p => `
    border-top-${p.side}-radius: ${p.theme.radii.xxxl};
    border-bottom-${p.side}-radius: ${p.theme.radii.xxxl};
  `}
  box-shadow: ${getShadow(p => (p.active ? "inset" : "default"))};
  outline: none;
  transition: all .1s ease;
  opacity: ${p => (p.active ? 1 : 0.4)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;
