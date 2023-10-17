import { QuestionTitle, VariantsWrapper } from "../Questions.styled";
import * as S from "./SelectType.styled";
import ArrowDown from "../../../assets/ArrowDown.svg";
import { useState } from "react";
import Colors from "../../../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../../../store/slices/Questions";

const SelectType = ({ question }) => {
  const {} = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);

  function answered(select, option) {
    setSelected([...selected, { id: select, answer: option }]);
  }

  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <VariantsWrapper>
        {question.select.map((select) => {
          const iscorrect =
            selected.length && selected.find((item) => item.id === select.id);

          let color;

          if (select.selected) {
            if (select.isCorrect) {
              color = `1px solid ${Colors.green}`;
            } else color = `1px solid ${Colors.red}`;
          } else {
            if (iscorrect) {
              if (select.correct === iscorrect.answer) {
                color = `1px solid ${Colors.green}`;
              } else color = `1px solid ${Colors.red}`;
            } else color = `1px solid ${Colors.background}`;
          }

          return (
            <S.SelectWrapper key={select.id}>
              <S.SelectImage src={select.image} />
              <S.Select
                defaultValue={
                  select.selected
                    ? JSON.stringify(select.selected)
                    : "select match"
                }
                onChange={(e) => {
                  answered(select.id, JSON.parse(e.target.value).id);
                  dispatch(
                    selectAnswer({
                      id: select.id,
                      answer: JSON.parse(e.target.value).id,
                    })
                  );
                }}
                disabled={
                  select.selected ||
                  selected.some((item) => item.id === select.id)
                }
                $br={color}
              >
                <S.Option value="select match" disabled>
                  Select match
                </S.Option>
                {select.options.map((option) => {
                  return (
                    <S.Option key={option.id} value={JSON.stringify(option)}>
                      {option.isCorrect ? `${option.option} ✓` : option.option}
                    </S.Option>
                  );
                })}
              </S.Select>
              <S.Arrow src={ArrowDown} />
            </S.SelectWrapper>
          );
        })}
      </VariantsWrapper>
    </>
  );
};

export default SelectType;
