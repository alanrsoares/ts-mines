import { ThemeProvider } from "styled-components";

import { GameStateProvider, useGameStateContainer } from "lib/contexts";
import { GameStatus } from "lib/game";
import { useRightClick } from "lib/hooks";
import useUpdateChecker, { UPDATE_CHECK_INTERVAL } from "lib/useUpdateChecker";

import { ReactComponent as CoolIcon } from "assets/cool.svg";
import { ReactComponent as SkullIcon } from "assets/skull.svg";
import { ReactComponent as ThinkingIcon } from "assets/thinking.svg";

import theme from "ui/theme";
import {
  AppBar,
  Brand,
  Clamp,
  Content,
  Controls,
  Root,
  StatusDisplay,
  Version,
} from "ui/components/core";
import Footer from "ui/components/Footer";
import GridComponent from "ui/components/Grid";
import Score from "ui/components/Score";

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

  const { state, handlers } = useGameStateContainer();

  return (
    <Root>
      <AppBar>
        <Clamp>
          <Brand>
            [MINES]
            <Version>{global.appVersion}</Version>
          </Brand>
          <StatusDisplay
            $isGameOver={state.gameStatus === "over"}
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

      <p className="text-xs">
        {state.gameLevel} - {state.boardSize}
      </p>

      <Footer
        onToggleGameMode={handlers.onToggleGameMode}
        onToggleSoundEffects={handlers.onToggleSoundEffects}
        gameMode={state.gameMode}
        soundEffects={state.enableSFX}
      />
    </Root>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider theme={theme}>
      <GameStateProvider>
        <App />
      </GameStateProvider>
    </ThemeProvider>
  );
}
