import { styled } from "styled-components";
import Colors from "../../../Constants/Colors";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
`;

export const SelectImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  height: 44px;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: ${({ $br }) => $br};
  outline: none;
`;

export const Option = styled.option`
  font-size: 36px !important;
  font-family: Poppins;
  width: 100%;
`;

export const Arrow = styled.img`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
