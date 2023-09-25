import * as S from "./Footer.styled";
import { Link } from "react-router-dom";
import { Paragraph, Wrapper } from "../Global.Styled";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whats-app.svg";
import telegram from "../../assets/telegram.svg";

const Footer = () => {
  return (
    <Wrapper>
      <S.Footer>
        <Paragraph $fz="20px" $fw="600">
          Saobraćajni zakoni
        </Paragraph>
        <S.FooterDetails>
          <S.FooterInfo>
            <Paragraph $fz="14px" $fw="500" $pb="4px">
              Additional information
            </Paragraph>
            <Link>
              <Paragraph $fz="12px" $op="0.8">
                Terms & conditions
              </Paragraph>
            </Link>
            <Link>
              <Paragraph $fz="12px" $op="0.8">
                Privacy policy
              </Paragraph>
            </Link>
            <Link>
              <Paragraph $fz="12px" $op="0.8">
                Contact the support team: hello@hygge.software
              </Paragraph>
            </Link>
          </S.FooterInfo>
          <S.FooterSocial>
            <Paragraph $fz="14px" $fw="500" $pb="16px">
              Pass the test on:
            </Paragraph>
            <S.FooterSocilLinks>
              <Link to="https://www.facebook.com/" target="_blank">
                <S.FooterSocilLink src={facebook} />
              </Link>
              <Link to="https://www.whatsapp.com/" target="_blank">
                <S.FooterSocilLink src={whatsapp} />
              </Link>
              <Link to="https://web.telegram.org" target="_blank">
                <S.FooterSocilLink src={telegram} />
              </Link>
            </S.FooterSocilLinks>
          </S.FooterSocial>
        </S.FooterDetails>
      </S.Footer>
    </Wrapper>
  );
};

export default Footer;
