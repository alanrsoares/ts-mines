import React from "react";

import styled, { getColor, getRadius } from "ui/styled";
import { ReactComponent as EyeIcon } from "assets/eye.svg";

export const Root = styled.div`
  display: flex;
  color: ${getColor("primary")};
  min-width: 8rem;
  flex-direction: column;
  align-items: center;
  background: ${getColor("shadow")};
  border-radius: ${getRadius("lg")};
  height: 3rem;
  justify-content: space-around;
  @media screen and (max-width: 360px) {
    min-width: 6rem;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor("primary")};
  font-size: 1.6rem;
`;

export const ProgressLine = styled.div<{ progress: number }>`
  height: 0.3rem;
  overflow: hidden;
  border-radius: ${getRadius("default")};
  width: 80%;
  align-self: center;
  background: linear-gradient(
    to right,
    ${getColor("positive")} 0%,
    ${getColor("positive")} ${(p) => p.progress}%,
    ${getColor("white")} ${(p) => p.progress}%,
    ${getColor("white")} 100%
  );
`;

export const ProgressIcon = styled(EyeIcon)`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.5rem;
`;

const Score: React.FC<{ score: number; progress: number }> = (props) => (
  <Root>
    <ProgressContainer>
      <ProgressIcon /> {props.score}
    </ProgressContainer>
    <ProgressLine progress={props.progress} />
  </Root>
);

export default Score;
