import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const ProgressBar = styled.div`
  width: 185px;
  height: 185px;
  position: relative;
  margin: 54px auto 30px;
  z-index: -1;
`;

export const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 52px;
`;

export const AgainButton = styled.button`
  border: 0;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: 16px 47px;
  font-size: 18px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  border: 1px solid ${Colors.primary};
  background-color: transparent;
  padding: 16px 47px;
  font-size: 18px;
  cursor: pointer;
`;
