import StandartType from "../QuestionTypes/StandartType/StandartType";
import ImageType from "../QuestionTypes/ImageType/ImageType";
import SelectType from "../QuestionTypes/SelectType/SelectType";
import { useSelector } from "react-redux";

const Tests = () => {
  const { currentQuestion } = useSelector((state) => state.questions);

  if (!currentQuestion) {
    return <div>No data</div>;
  }

  return (
    <>
      {currentQuestion.type === "standartType" ? (
        <StandartType question={currentQuestion} />
      ) : currentQuestion.type === "imageType" ? (
        <ImageType question={currentQuestion} />
      ) : (
        <SelectType question={currentQuestion} />
      )}
    </>
  );
};

export default Tests;
