import AppTest from "../AppTest/AppTest";
import Footer from "../Footer/Footer";
import { Wrapper } from "../Global.Styled";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <AppTest />
      <Footer />
    </>
  );
};

export default Layout;
