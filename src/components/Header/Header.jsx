import { Link, useLocation, useParams } from "react-router-dom";
import Colors from "../../Constants/Colors";
import { Paragraph } from "../Global.Styled";
import * as S from "./Header.styled";
const Header = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <S.Navbar>
      <S.NavbarWrapper>
        <S.NavbarInner>
          <Link to="/">
            <Paragraph $fz={"24px"} $fw={"600"} $clr={Colors.secondary}>
              Saobraćajni zakoni
            </Paragraph>
          </Link>
          <S.NavbarItems>
            <Link to="/Traffic-rules">
              <Paragraph
                $fw={location.pathname === "/Traffic-rules" ? 600 : ""}
              >
                Traffic rules
              </Paragraph>
            </Link>
            <Link to="/Testing">
              <Paragraph
                $fw={location.pathname === "/Testing" || params.id ? 600 : ""}
              >
                Testing
              </Paragraph>
            </Link>
            <Link to="/">
              <Paragraph $fw={location.pathname === "/Contacts" ? 600 : ""}>
                Contacts
              </Paragraph>
            </Link>
          </S.NavbarItems>
          <S.Lang>
            <Paragraph
            // fw={selectedLang === "ME" ? 600 : ""}
            >
              ME
            </Paragraph>
            <Paragraph>|</Paragraph>
            <Paragraph
            // fw={selectedLang === "EN" ? 600 : ""}
            >
              EN
            </Paragraph>
          </S.Lang>
        </S.NavbarInner>
      </S.NavbarWrapper>
    </S.Navbar>
  );
};

export default Header;
