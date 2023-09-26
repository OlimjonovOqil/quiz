import { QuestionTitle, VariantsWrapper } from "../Questions.styled";
import * as S from "./SelectType.styled";
import ArrowDown from "../../../assets/ArrowDown.svg";
import { useState } from "react";
import Colors from "../../../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../../../store/slices/Questions";
// import ArrowUp from "../../../assets/ArrowUp.svg";

const SelectType = ({ question }) => {
  const {} = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);
  // const [value, setValue] = useState("");
  // const [isCorrect, setIsCorrect] = useState(false);

  function answered(select, option, value) {
    setSelected([...selected, { id: select, answer: option }]);
  }

  // if (selected.length === question.correctAnswers.length) {
  //   setIsCorrect(
  //     question.correctAnswers.every(
  //       (item, index) => item === selected[index].answer
  //     )
  //   );
  // }

  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <VariantsWrapper>
        {question.select.map((select, index) => {
          const iscorrect =
            selected.length && selected.find((item) => item.id === select.id);

          let color;

          if (select.selected) {
            if (select.isCorrect === "true") {
              color = `1px solid ${Colors.green}`;
            } else color = `1px solid ${Colors.red}`;
          } else {
            if (iscorrect) {
              if (select.correct === iscorrect.answer) {
                color = `1px solid ${Colors.green}`;
              } else color = `1px solid ${Colors.red}`;
            } else color = `1px solid ${Colors.background}`;
          }

          // const value =
          //   question.selectedAnswers[index].id === select.id &&
          //   question.selectedAnswers[index];

          // console.log("value", value);
          // console.log(question.selectedAnswers);
          // console.log(select);
          // console.log(index);

          // console.log(select.selected);
          // console.log(select.isCorrect);

          return (
            <S.SelectWrapper key={select.id}>
              <S.SelectImage src={select.image} />
              <S.Select
                id={"select" + select.id}
                defaultValue={
                  select.selected
                    ? JSON.stringify(select.selected)
                    : "select match"
                }
                onChange={(e) => {
                  answered(
                    select.id,
                    JSON.parse(e.target.value).id,
                    e.target.value
                  );
                  dispatch(
                    selectAnswer({
                      id: select.id,
                      answer: JSON.parse(e.target.value).id,
                      option: JSON.parse(e.target.value).option,
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
                      {option.isCorrect === "true"
                        ? `${option.option} ✓`
                        : option.option}
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
