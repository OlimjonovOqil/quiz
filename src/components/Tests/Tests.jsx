import StandartType from "../QuestionTypes/StandartType/StandartType";
import ImageType from "../QuestionTypes/ImageType/ImageType";
import { useSelector } from "react-redux";

const Tests = () => {
  const { currentQuestion } = useSelector((state) => state.questions);
  console.log(currentQuestion);

  if (!currentQuestion) {
    return <div>No data</div>;
  }

  return (
    <>
      {currentQuestion.type === "standartType" ? (
        <StandartType question={currentQuestion} />
      ) : (
        <ImageType question={currentQuestion} />
      )}
    </>
  );
};

export default Tests;
