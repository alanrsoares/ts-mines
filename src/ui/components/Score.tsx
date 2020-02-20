import React from "react";

import styled, {
  getColor,
  getShadow,
  getRadius,
  getFontFamily
} from "ui/styled";

export const ScoreWrapper = styled.div`
  font-family: ${getFontFamily("display")};
  font-size: 1rem;
  border-radius: ${getRadius("lg")};
  padding: 0.2rem 0.4rem;
  background: ${getColor("shadow")};
  border-radius: ${getRadius("lg")};
  margin-top: 0.2rem;
  color: ${getColor("primary")};
  box-shadow: ${getShadow("default")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreLabel = styled.span`
  color: ${getColor("muted")};
  margin-right: 0.3rem;
  font-size: 0.8rem;
  font-family: ${getFontFamily("display")};
`;

const Score: React.FC<{ score: number }> = props => {
  return <ScoreWrapper>{props.score}</ScoreWrapper>;
};

export default Score;
