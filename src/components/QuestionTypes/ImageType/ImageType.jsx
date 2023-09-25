import { QuestionTitle } from "../Questions.styled";
import Variants from "../Variants";
import { Image, ImageTypeWrapper } from "./ImageType.styled";

const ImageType = ({ question }) => {
  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <ImageTypeWrapper>
        <Image src={question.image} />
        <Variants question={question} />
      </ImageTypeWrapper>
    </>
  );
};

export default ImageType;
