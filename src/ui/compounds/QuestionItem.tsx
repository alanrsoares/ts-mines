import React, { useCallback, useState } from "react";

import { IQuestion } from "types";
import {
  Card,
  Hint,
  HintHighlight,
  Image,
  ImageWrapper,
  Option,
  Pill,
  QuestionContainer,
  QuestionNumber,
  QuestionText
} from "ui/components/core";

interface Props extends IQuestion {
  index: number;
  selected: string | null;
  onSelect(selectedOption: string, isCorrect: boolean): void;
}

export default function QuestionItem(props: Props) {
  const [showRoundImage, setShowRoundImage] = useState(true);

  const handleToggleRoundImage = useCallback(
    () => setShowRoundImage(prev => !prev),
    []
  );

  const handleSelection = useCallback(
    (option: string) => () => {
      if (!!props.selected) {
        return;
      }

      props.onSelect(option, option === props.correctAnswer);
    },
    [props]
  );

  const pillContent = useCallback(
    (key: string) =>
      !!props.selected &&
      (key === props.selected || key === props.correctAnswer)
        ? ""
        : key,
    [props.selected, props.correctAnswer]
  );

  const answerKeys = Object.keys(props.answers);

  return (
    <Card>
      <QuestionContainer>
        <QuestionText>
          <QuestionNumber>{props.index}</QuestionNumber> {props.question}
        </QuestionText>
        <ImageWrapper onClick={handleToggleRoundImage}>
          <Image
            round={showRoundImage}
            alt="question's image"
            src={props.image.uri}
          />
        </ImageWrapper>
      </QuestionContainer>
      {answerKeys.map((key: string) => (
        <Option
          key={key}
          onClick={handleSelection(key)}
          isAnswered={!!props.selected}
          isCorrect={key === props.correctAnswer}
          isSelected={key === props.selected}
        >
          <Pill
            isAnswered={!!props.selected}
            isCorrect={key === props.correctAnswer}
            isSelected={key === props.selected}
          >
            {pillContent(key)}
          </Pill>
          <div>{props.answers[key]}</div>
        </Option>
      ))}
      {!!props.selected && (
        <Hint>
          {props.selected !== props.correctAnswer && (
            <HintHighlight>Correct Answer: {props.correctAnswer}</HintHighlight>
          )}
          {`For more information about this question refer to page ${props.roadCodePage} of the Official New Zealand Road Code.`}
        </Hint>
      )}
    </Card>
  );
}
