import React from "react";

import { ratio } from "helpers";
import styled, { getColor, getShadow } from "ui/styled";
import { Color } from "ui/theme";

const ProgressContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: ${getColor("neutral")};
  height: 1.8em;
  width: 100%;
  box-shadow: ${getShadow("default")};
`;

export interface ProgressBarProps {
  ratio: number;
  color: Color;
}

const ProgressBar = styled.div<ProgressBarProps>`
  height: 1.8em;
  background-color: ${getColor(props => props.color)};
  width: ${props => props.ratio}%;
  transition: 0.3s;
`;

const ProgressText = styled.div`
  font-size: 1em;
  font-weight: bold;
  text-align: right;
  position: fixed;
  top: 0;
  right: 0.1em;
  height: 1.8em;
  color: white;
  padding: 0.3em 0.4em;
`;

interface Props {
  questionsCount: number;
  correctCount: number;
  incorrectCount: number;
}

const Progress: React.FC<Props> = (props: Props) => {
  const answeredCount = props.incorrectCount + props.correctCount;

  const getSampleRatio = ratio(props.questionsCount);
  const progressRatio = getSampleRatio(answeredCount);
  const incorrectRatio = getSampleRatio(props.incorrectCount);
  const correctRatio = getSampleRatio(props.correctCount);

  const ratios: ProgressBarProps[] = [
    {
      ratio: incorrectRatio,
      color: "negative"
    },
    {
      ratio: correctRatio,
      color: "positive"
    }
  ];

  return (
    <ProgressContainer>
      {ratios.map(x => (
        <ProgressBar key={x.color} {...x} />
      ))}
      <ProgressText>
        {answeredCount} of {props.questionsCount} ({Math.round(progressRatio)}
        %)
        {!!props.incorrectCount &&
          ` / ${props.incorrectCount} wrong answer${
            props.incorrectCount > 1 ? "s" : ""
          }`}
      </ProgressText>
    </ProgressContainer>
  );
};

export default Progress;
