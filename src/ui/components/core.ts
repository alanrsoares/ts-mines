import styled, { getColor, getFontFamily, getShadow } from "ui/styled";
import between from "polished/lib/mixins/between";

import { css } from "styled-components";

export const BOARD_WIDTH = "1151.42px";
export const BOARD_HEIGHT = "893px";

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
  @media screen and (max-width: ${BOARD_WIDTH}) {
    width: 100vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("primary")};
  font-size: ${between("2rem", "3rem")};
  display: flex;
  flex: 1;
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
  width: 2.8rem;
  height: 2.8rem;
  margin-top: 0.8rem;
  padding: 0.4rem;
  animation: ${p =>
    p.isGameOver
      ? css`
          ${p.theme.animations.glow} 4s infinite ease
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
