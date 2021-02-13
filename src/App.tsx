import React from "react";
import { ThemeProvider } from "styled-components";

import { GameStatus } from "lib/game";
import useUpdateChecker, { UPDATE_CHECK_INTERVAL } from "lib/useUpdateChecker";
import { useRightClick } from "lib/hooks";
import { Game } from "lib/contexts";

import SkullIcon from "assets/skull.svg";
import ThinkingIcon from "assets/thinking.svg";
import CoolIcon from "assets/cool.svg";

import theme from "ui/theme";
import {
  Root,
  AppBar,
  Brand,
  StatusDisplay,
  Content,
  Clamp,
  Controls,
  Version,
} from "ui/components/core";
import GridComponent from "ui/components/Grid";
import Footer from "ui/components/Footer";
import Score from "ui/components/Score";

import { version } from "../package.json";

const STATUS_ICONS: Record<GameStatus, JSX.Element> = {
  new: <ThinkingIcon />,
  won: <CoolIcon />,
  over: <SkullIcon />,
};

const StatusIcon: React.FC<{ status: GameStatus }> = (props) =>
  STATUS_ICONS[props.status];

const NO_OP = () => {};

export function App() {
  useUpdateChecker(UPDATE_CHECK_INTERVAL);
  useRightClick(NO_OP);

  const { state, handlers } = Game.useContainer();

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>
            [MINES]
            <Version>{version}</Version>
          </Brand>
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

export default function AppWithProviders() {
  return (
    <ThemeProvider theme={theme}>
      <Game.Provider>
        <App />
      </Game.Provider>
    </ThemeProvider>
  );
}
