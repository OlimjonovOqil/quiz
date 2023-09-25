import { QuestionTitle } from "../Questions.styled";
import Variants from "../Variants";

const StandartType = ({ question }) => {
  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <Variants question={question} />
    </>
  );
};

export default StandartType;
