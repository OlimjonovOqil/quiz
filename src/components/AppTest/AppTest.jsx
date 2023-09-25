import { Paragraph, Wrapper } from "../Global.Styled";
import * as S from "./AppTest.styled";
import googlePlay from "../../assets/google-play.svg";
import appStore from "../../assets/app-store.svg";
import iphone from "../../assets/iPhone.png";
import { Link } from "react-router-dom";

const AppTest = () => {
  return (
    <S.AppTestWrapper>
      <Wrapper>
        <S.AppTestInner>
          <S.AppTestText>
            <Paragraph $fz="34px" $fw="600" $lh="130%" $pb="10px">
              Montenegro traffic rules that are always online with you
            </Paragraph>
            <Paragraph $fz="14px" $op="0.8" $pb="22px">
              Online assistant for learning the rules of the road and a
              simulator for passing exams. Our application will help you save
              time, gain knowledge and pass the exam
            </Paragraph>
            <Paragraph $fz="14px" $fw="500" $pb="11.7px">
              Download App
            </Paragraph>
            <S.AppTestSocials>
              <Link to="https://play.google.com/" target="_blank">
                <S.AppTestSocial src={googlePlay} />
              </Link>
              <Link to="https://www.apple.com/ru/app-store/" target="_blank">
                <S.AppTestSocial src={appStore} />
              </Link>
            </S.AppTestSocials>
          </S.AppTestText>
          <S.AppTestImgWrapper>
            <S.AppTestImg src={iphone} />
          </S.AppTestImgWrapper>
        </S.AppTestInner>
      </Wrapper>
    </S.AppTestWrapper>
  );
};

export default AppTest;
