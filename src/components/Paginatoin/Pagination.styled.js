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
  /* background-color: ${({ bg }) => bg}; */
  /* background-color: ${({ bg }) =>
    bg === "true" ? Colors.green : bg === "false" ? Colors.red : bg}; */
  background-color: ${({ bg }) => {
    // if (bg === "no") {
    //   return Colors.background;
    // } else if (bg === true) {
    //   return "green";
    // } else if (bg === false) {
    //   return "red";
    // }
    return bg || Colors.background;
  }};
  cursor: pointer;
`;
