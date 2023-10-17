import * as S from "./StartTesting.styles";
import testImg from "../../assets/test.jpeg";
import { Paragraph } from "../Global.Styled";

const StartTest = ({ starting }) => {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    starting();
  }

  return (
    <S.StartTestingWrapper>
      <S.StartTestingImg src={testImg} />
      <Paragraph $fz="22px">
        Your exam is considered successful if you score more than 60 points and
        complete it in less than 60 minutes. You can`t correct your answers.
        Press start to continue.
      </Paragraph>
      <Paragraph $fz="22px">You can`t correct your answers.</Paragraph>{" "}
      <Paragraph $fz="22px">Press start to continue.</Paragraph>
      <S.StartButton onClick={handleClick}>Start</S.StartButton>
    </S.StartTestingWrapper>
  );
};

export default StartTest;
