import { Link } from "react-router-dom";
import { Paragraph, SectionName } from "../../components/Global.Styled";
import Layout from "../../components/Layout/Layout";
import StartTest from "../../components/StartTest/StartTesting";
import Colors from "../../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { NextQuestion } from "../../components/QuestionTypes/Questions.styled";
import Tests from "../../components/Tests/Tests";
import Pagination from "../../components/Paginatoin/Pagination";
import {
  endTest,
  getQuestion,
  nextQuestion,
  startTest,
} from "../../store/slices/Questions";

const Testing = () => {
  const { questions, currentQuestion, questionIndex, testStatus } = useSelector(
    (state) => state.questions
  );

  const dispatch = useDispatch();

  function starting() {
    dispatch(startTest());
    dispatch(getQuestion(0));
  }

  function ending() {
    dispatch(endTest());
  }

  return (
    <Layout>
      <SectionName>
        <Link to="/">
          <Paragraph $clr={Colors.section} $fz="12px" $lh="150%">
            Saobraćajni zakoni
          </Paragraph>
        </Link>
        <Paragraph $fz="12px" $lh="150%" $fw="600">
          / Testing
        </Paragraph>
      </SectionName>
      {!testStatus ? (
        <StartTest starting={starting} />
      ) : (
        <>
          <Pagination questions={questions} />
          <Tests question={currentQuestion} />
          {questionIndex === questions.length - 1 ? (
            <Link to="/" onClick={ending}>
              <NextQuestion>Finish</NextQuestion>
            </Link>
          ) : (
            <NextQuestion onClick={() => dispatch(nextQuestion())}>
              Next
            </NextQuestion>
          )}
          {/* <NextQuestion
            dp={questionIndex === questions.length - 1 ? "none" : "block"}
            onClick={() => dispatch(nextQuestion())}
          >
            Next
          </NextQuestion>
          <NextQuestion
            dp={questionIndex === questions.length - 1 ? "none" : "block"}
            onClick={() => dispatch(nextQuestion())}
          >
            Finish
          </NextQuestion> */}
        </>
      )}
    </Layout>
  );
};

export default Testing;