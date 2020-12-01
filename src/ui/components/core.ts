import { css } from "styled-components";
import styled, {
  getColor,
  getFontFamily,
  getShadow,
  getAnimation,
} from "ui/styled";

export const BOARD_WIDTH = "1072.16px";
export const BOARD_HEIGHT = "840.44px";

export const APP_BAR_HEIGHT = "3.8rem";
export const FOOTER_HEIGHT = "3.8rem";
export const CONTENT_MARGIN = "1rem";

export const Root = styled.div`
  font-family: ${getFontFamily("default")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background: ${getColor("muted")};
`;

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${APP_BAR_HEIGHT};
  background: ${getColor("black")};
  box-shadow: ${getShadow("default")};
`;

export const Clamp = styled.div`
  display: flex;
  width: ${BOARD_WIDTH};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  @media screen and (max-width: ${BOARD_WIDTH}) {
    width: 100vw;
  }
`;

export const Version = styled.span`
  font-size: 0.375em;
  position: absolute;
  bottom: -0.75em;
  left: 8.75em;
  font-family: sans-serif;
  ::before {
    content: "v";
  }
`;

export const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("primary")};
  font-size: 2rem;
  display: flex;
  flex: 1;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const Controls = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;

export const StatusDisplay = styled.div<{ isGameOver: boolean }>`
  background: ${getColor("shadow")};
  box-shadow: ${getShadow("default")};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  animation: ${(p) =>
    p.isGameOver
      ? css`
          ${getAnimation("glow")} 4s infinite ease
        `
      : "none"};
`;

export const Content = styled.main`
  display: flex;
  max-width: calc(100vw - ${CONTENT_MARGIN});
  max-height: calc(
    100vh - ((2 * ${CONTENT_MARGIN}) + ${APP_BAR_HEIGHT} + ${FOOTER_HEIGHT})
  );
  margin-top: ${CONTENT_MARGIN};
  margin-bottom: ${CONTENT_MARGIN};
  -ms-overflow-style: none;
  @media screen and (max-height: ${BOARD_HEIGHT}) {
    overflow: scroll;
  }
  @media screen and (max-width: ${BOARD_WIDTH}) {
    overflow: scroll;
  }
`;
