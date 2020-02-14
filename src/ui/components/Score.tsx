import React from "react";

import styled, {
  getColor,
  getShadow,
  getRadius,
  getFontFamily
} from "ui/styled";

export const ScoreWrapper = styled.div`
  font-family: ${getFontFamily("display")};
  font-weight: 700;
  font-size: 1em;
  border-radius: ${getRadius("lg")};
  padding: 0.2em 0.4em;
  background: ${getColor("black")};
  color: ${getColor("primary")};
  border: solid 2px ${getColor("primary")};
  box-shadow: ${getShadow("default")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreLabel = styled.span`
  color: ${getColor("muted")};
  margin-right: 0.3em;
  font-size: 0.8em;
  font-family: ${getFontFamily("display")};
`;

const Score: React.FC<{ score: number }> = props => {
  return (
    <ScoreWrapper>
      <ScoreLabel>score</ScoreLabel>
      {props.score}
    </ScoreWrapper>
  );
};

export default Score;
