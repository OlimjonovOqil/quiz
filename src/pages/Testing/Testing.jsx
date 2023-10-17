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
  finishTest,
  getQuestion,
  nextQuestion,
  startTest,
} from "../../store/slices/Questions";
import FinishTest from "../../components/FinishTest/FinishTest";

const Testing = () => {
  const { questions, questionIndex, testStatus } = useSelector(
    (state) => state.questions
  );

  const dispatch = useDispatch();

  function starting() {
    dispatch(startTest());
    dispatch(getQuestion(0));
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
      {!testStatus  ? (
        <StartTest starting={starting} />
      ) : testStatus === "finished" ? (
        <FinishTest />
      ) : (
        <>
          <Pagination questions={questions} />
          <Tests />
          {questionIndex === questions.length - 1 ? (
            <NextQuestion onClick={() => dispatch(finishTest())}>
              Finish
            </NextQuestion>
          ) : (
            <NextQuestion onClick={() => dispatch(nextQuestion())}>
              Next
            </NextQuestion>
          )}
        </>
      )}
    </Layout>
  );
};

export default Testing;
