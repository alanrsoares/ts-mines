import { css } from "styled-components";
import tw from "tailwind-styled-components";

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

export const Root = tw.div`
  h-screen flex flex-col 
  items-center
 bg-muted
`;

export const AppBar = tw.header`
  flex items-center justify-center 
  w-full h-appbar 
  bg-black shadow-md
`;

export const Clamp = tw.div`
  flex flex-row
  items-center 
  justify-between
  px-[0.5rem]
  w-board
`;

export const Version = tw.span`
  absolute
  text-[0.375em]
  left-[8.75em]
  bottom-[-0.75em]
  before:content-['v']
`;

export const Brand = tw.div`
  font-display text-primary text-[2rem] 
  flex flex-1 cursor-pointer
  relative
`;

export const Controls = tw.nav`
  flex flex-1 flex-col items-end
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
