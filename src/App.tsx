import React from "react";

import { ThemeProvider } from "styled-components";

import * as Game from "lib/game";
import useUpdateChecker from "lib/useUpdateChecker";
import { useRightClick, useGame } from "lib/hooks";

import { ReactComponent as SkullIcon } from "assets/skull.svg";
import { ReactComponent as ThinkingIcon } from "assets/thinking.svg";
import { ReactComponent as CoolIcon } from "assets/cool.svg";

import theme from "ui/theme";

import {
  Root,
  AppBar,
  Brand,
  StatusDisplay,
  Content,
  Clamp,
  Controls,
} from "ui/components/core";

import GridComponent from "ui/components/Grid";
import Footer from "ui/components/Footer";
import Score from "ui/components/Score";

const STATUS_ICONS: Record<Game.GameStatus, JSX.Element> = {
  new: <ThinkingIcon />,
  won: <CoolIcon />,
  over: <SkullIcon />,
};

const StatusIcon: React.FC<{ status: Game.GameStatus }> = (props) =>
  STATUS_ICONS[props.status];

const NO_OP = () => {};

export function App() {
  useUpdateChecker();
  useRightClick(NO_OP);

  const { state, handlers } = useGame();

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>[MINES]</Brand>
          <StatusDisplay
            isGameOver={state.gameStatus === "over"}
            onClick={handlers.onStatusClick}
          >
            <StatusIcon status={state.gameStatus} />
          </StatusDisplay>
          <Controls>
            <Score score={state.score} progress={state.progress} />
          </Controls>
        </Clamp>
      </AppBar>
      <Content>
        <GridComponent
          grid={state.grid}
          activeCell={state.activeCell}
          onTileClick={handlers.onCellClick}
          onTileLongPress={handlers.onCellLongPress}
        />
      </Content>
      <Footer
        onToggleGameMode={handlers.onToggleGameMode}
        gameMode={state.gameMode}
      />
    </Root>
  );
}

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
