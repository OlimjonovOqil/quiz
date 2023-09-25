import Layout from "../../components/Layout/Layout";
import * as S from "./Home.styled";
import Traffic from "../../assets/traffic-rules.png";
import Test from "../../assets/test.jpeg";
import { Paragraph } from "../../components/Global.Styled";

const Home = () => {
  return (
    <Layout>
      <S.HomeWrapper>
        <S.HomeCard to="/Traffic-rules">
          <S.CardImg src={Traffic} />
          <S.CardText>
            <Paragraph $fz="22px" $fw="600">
              Traffic rules of Montenegro
            </Paragraph>
            <Paragraph $fz="14px" $lh="140%">
              Official traffic rules with search function and pictures of road
              signs
            </Paragraph>
          </S.CardText>
        </S.HomeCard>
        <S.HomeCard to="/Testing">
          <S.CardImg src={Test} />
          <S.CardText>
            <Paragraph $fz="22px" $fw="600">
              Testing
            </Paragraph>
            <Paragraph $fz="14px" $lh="140%">
              Online traffic tests will help you prepare for the exam and test
              your knowledge of the Traffic Rules. Tests are fully consistent
              with the official exam
            </Paragraph>
          </S.CardText>
        </S.HomeCard>
      </S.HomeWrapper>
    </Layout>
  );
};

export default Home;
