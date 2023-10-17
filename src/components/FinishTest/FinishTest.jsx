import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./FinishTest.styled";
import { Paragraph } from "../Global.Styled";
import { endTest, getQuestion, startTest } from "../../store/slices/Questions";
import { Link } from "react-router-dom";

const FinishTest = () => {
  const { percentage, questions, correctAnswers } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();

  return (
    <>
      <S.ProgressBar>
        <CircularProgressbar
          value={percentage}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "transparent",
            textColor: "black",
            pathColor: "black",
            trailColor: "#D9D9D9",
            fontFamily: "Poppins",
            fontSize: "36px",
          })}
        />
        <S.Progress>
          <Paragraph $fz={"36px"} $fw={600} $pb={"3px"}>
            {percentage}%
          </Paragraph>
          <Paragraph $clr={"#777"} $fz={"13px"} $ta={"center"}>
            {correctAnswers} out of {questions.length}
          </Paragraph>
        </S.Progress>
      </S.ProgressBar>
      <Paragraph $fz={"20px"} $fw={600} $ta={"center"} $pb={"12px"}>
        {percentage >= 80 ? "Success!" : "Failure!"}
      </Paragraph>
      <Paragraph $fz={"16px"} $ta={"center"} $clr={"#777"}>
        {percentage >= 80 ? "Great, test passed" : "Disappointing, test failed"}
      </Paragraph>
      <S.Buttons>
        <S.AgainButton
          onClick={() => {
            dispatch(startTest());
            dispatch(getQuestion(0));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Try again
        </S.AgainButton>
        <Link to="/">
          <S.BackButton
            onClick={() => {
              dispatch(endTest());
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to tests
          </S.BackButton>
        </Link>
      </S.Buttons>
    </>
  );
};

export default FinishTest;
