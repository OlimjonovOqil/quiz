import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const Navbar = styled.div`
  background-color: ${Colors.background};
  padding: 27px 0;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarWrapper = styled.div`
  max-width: 1290px;
  margin: 0 auto;
`;

export const NavbarInner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Lang = styled.div`
  display: flex;
  gap: 6px;
`;
