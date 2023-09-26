import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const Pagination = styled.div`
  display: flex;
  gap: 17px;
  margin: 54px 0 32px;
`;

export const PaginationItem = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bg }) => $bg};
  color: ${({ $clr }) => $clr && Colors.white};
  cursor: pointer;
  position: relative;
`;

export const CurrentItem = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 5px solid black;
  bottom: -7px;
  display: ${({ $dp }) => $dp};
`;
