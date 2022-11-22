import tw from "tailwind-styled-components";

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

export const StatusDisplay = tw.div<{ $isGameOver: boolean }>`
  bg-shadow
  shadow-lg shadow-black/60
  rounded-full
  w-16 h-16
  mt-4 p-2
  cursor-pointer
  ${(p) => (p.$isGameOver ? "animate-glow" : "")}
`;

export const Content = tw.main`content`;
