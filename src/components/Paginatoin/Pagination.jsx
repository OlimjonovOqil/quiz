import { useDispatch, useSelector } from "react-redux";
import * as S from "./Pagination.styled";
import { getQuestion } from "../../store/slices/Questions";
import Colors from "../../Constants/Colors";

const Pagination = ({ questions }) => {
  const { questionIndex } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  return (
    <S.Pagination>
      {questions &&
        questions.map((step) => {
          let bg;
          if (step.isAnswered === "true") {
            step.isCorrectAnswer === "true"
              ? (bg = Colors.green)
              : (bg = Colors.red);
          } else {
            bg = Colors.background;
          }
          return (
            <S.PaginationItem
              $bg={bg}
              $clr={step.isAnswered === "true"}
              key={step.id}
              onClick={() => dispatch(getQuestion(step.id - 1))}
            >
              {step.id}
              <S.CurrentItem
                $dp={questionIndex + 1 === step.id ? "block" : "none"}
              />
            </S.PaginationItem>
          );
        })}
    </S.Pagination>
  );
};

export default Pagination;
