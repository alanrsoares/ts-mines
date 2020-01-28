import React from "react";

import { ratio } from "helpers";
import { History } from "types";
import styled, { getColor, getRadius, getShadow } from "ui/styled";
import { Color } from "ui/theme";

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  height: 12em;
  justify-content: space-around;
  margin-bottom: 1em;
  border-radius: ${getRadius("md")};
  box-shadow: ${getShadow("default")};
  overflow: hidden;
`;

const BarWrapper = styled.div`
  padding: 0.4em 1em;
  background-color: #fff;
  width: 3em;
  display: flex;
  border-right: solid 1px ${getColor("gray")};
  justify-content: center;
`;

interface BarProps {
  value: number;
  total: number;
  color: Color;
}

const Bar = styled.div<BarProps>`
  background-color: ${props => props.theme.colors[props.color]};
  color: ${getColor("white")};
  align-self: flex-end;
  height: calc(${props => ratio(props.total)(props.value)}%);
  width: calc(50%);
  border-top-right-radius: ${getRadius("md")};
  border-top-left-radius: ${getRadius("md")};
  margin: 0.1em;
  text-align: center;
  padding: 0.4em 0;
  box-shadow: ${getShadow("default")};
`;

interface Props {
  history: History;
}

export default function ProgressHistory(props: Props) {
  return (
    <Wrapper>
      {props.history.map((entry, i) => (
        <BarWrapper key={`entry-${i}`}>
          {!!entry.correct && (
            <Bar color="positive" value={entry.correct} total={entry.total}>
              {entry.correct}
            </Bar>
          )}
          {!!entry.incorrect && (
            <Bar color="negative" value={entry.incorrect} total={entry.total}>
              {entry.incorrect}
            </Bar>
          )}
        </BarWrapper>
      ))}
    </Wrapper>
  );
}
