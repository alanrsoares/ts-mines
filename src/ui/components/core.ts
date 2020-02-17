import styled, {
  getColor,
  getFontFamily,
  getShadow,
  getRadius
} from "ui/styled";
import between from "polished/lib/mixins/between";

import { ReactComponent as EyeIcon } from "assets/eye.svg";
import { css } from "styled-components";

export const BOARD_WIDTH = "1151.42px";
export const BOARD_HEIGHT = "893px";

export const APP_BAR_HEIGHT = "3.8em";
export const FOOTER_HEIGHT = "3.8em";
export const CONTENT_MARGIN = "1em";

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
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

export const Brand = styled.div`
  font-family: ${getFontFamily("display")};
  color: ${getColor("primary")};
  font-size: ${between("2em", "3em")};
  display: flex;
  flex: 1;
`;

export const Controls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;

export const StatusDisplay = styled.div<{ isGameOver: boolean }>`
  background: ${getColor("shadow")};
  box-shadow: ${getShadow("default")};
  border-radius: 50%;
  width: 2.8em;
  height: 2.8em;
  margin-top: 0.8em;
  padding: 0.4em;
  animation: ${p =>
    p.isGameOver
      ? css`
          ${p.theme.animations.glow} 4s infinite ease
        `
      : "none"};
`;

export const Content = styled.div`
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

export const Progress = styled.div`
  display: flex;
  color: ${getColor("primary")};
  min-width: 8em;
  flex-direction: column;
  align-items: center;
  background: ${getColor("shadow")};
  border-radius: ${getRadius("lg")};
  height: 3em;
  justify-content: space-around;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor("primary")};
  font-size: 1.3em;
`;

export const ProgressLine = styled.div<{ progress: number }>`
  height: 0.3em;
  overflow: hidden;
  border-radius: ${getRadius("default")};
  width: 80%;
  align-self: center;
  background: linear-gradient(
    to right,
    ${getColor("positive")} 0%,
    ${getColor("positive")} ${p => p.progress}%,
    ${getColor("white")} ${p => p.progress}%,
    ${getColor("white")} 100%
  );
`;

export const ProgressIcon = styled(EyeIcon)`
  width: 0.9em;
  height: 0.9em;
  margin-right: 0.5em;
`;
