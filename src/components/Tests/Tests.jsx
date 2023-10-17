import StandartType from "../QuestionTypes/StandartType/StandartType";
import ImageType from "../QuestionTypes/ImageType/ImageType";
import SelectType from "../QuestionTypes/SelectType/SelectType";
import { useSelector } from "react-redux";

const Tests = () => {
  const { questions, questionIndex } = useSelector(
    (state) => state.questions
  );

  if (!questions[questionIndex]) {
    return <div>No data</div>;
  }


  return (
    <>
      {questions[questionIndex].type === "standartType" ? (
        <StandartType question={questions[questionIndex]} />
      ) : questions[questionIndex].type === "imageType" ? (
        <ImageType question={questions[questionIndex]} />
      ) : (
        <SelectType question={questions[questionIndex]} />
      )}
    </>
  );
};

export default Tests;
