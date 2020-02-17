import styled, { getColor, getFontFamily, getShadow } from "ui/styled";
import between from "polished/lib/mixins/between";

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
  flex-direction: row-reverse;
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
