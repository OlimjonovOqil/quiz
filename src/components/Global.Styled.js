import { styled } from "styled-components";
import Colors from "../Constants/Colors";

export const Paragraph = styled.p.attrs((props) => ({
  ...props,
}))`
  font-family: Poppins;
  font-size: ${({ $fz }) => $fz || "16px"};
  line-height: ${({ $lh }) => $lh || "normal"};
  font-weight: ${({ $fw }) => $fw || 400};
  color: ${({ $clr }) => $clr || Colors.primary};
  padding-bottom: ${({ $pb }) => $pb || 0};
  opacity: ${({ $op }) => $op || 1};
`;

export const Wrapper = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding-top: 90px;
`;

export const SectionName = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 28px;
`;
