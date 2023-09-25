import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const StartTestingWrapper = styled.div`
  max-width: 630px;
  margin: 0 auto;
  padding-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StartTestingImg = styled.img`
  width: 100%;
  height: 409px;
  margin-bottom: 24px;
  object-fit: cover;
`;

export const StartButton = styled.div`
  padding: 16px 47px;
  background-color: ${Colors.btn};
  color: ${Colors.white};
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;
`;
