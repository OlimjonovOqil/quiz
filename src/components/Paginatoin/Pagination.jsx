import { useDispatch, useSelector } from "react-redux";
import * as S from "./Pagination.styled";
import { getQuestion } from "../../store/slices/Questions";

const Pagination = ({ questions }) => {
  const dispatch = useDispatch();

  return (
    <S.Pagination>
      {questions &&
        questions.map((step) => {
          return (
            <S.PaginationItem
              // bg={              }
              // isAnswered={
              //   question.isAnswered ? question.isCorrrectAnswer : undefined
              // }
              key={step.id}
              onClick={() => dispatch(getQuestion(step.id - 1))}
            >
              {step.id}
            </S.PaginationItem>
          );
        })}
    </S.Pagination>
  );
};

export default Pagination;
