import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const AppTestWrapper = styled.div`
  background-color: ${Colors.background};
  padding: 22px 0;
  margin-top: 140px;
`;

export const AppTestInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppTestText = styled.div`
  max-width: 516px;
`;

export const AppTestSocials = styled.div`
  display: flex;
  gap: 12px;
`;

export const AppTestSocial = styled.img`
  width: 136px;
  height: 40px;
  object-fit: cover;
`;

export const AppTestImgWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const AppTestImg = styled.img`
  width: 304px;
  height: 345px;
  object-fit: cover;
`;
