import { styled } from "styled-components";
import Colors from "../../Constants/Colors";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;

export const HomeCard = styled(Link)`
  max-width: 630px;
  padding: 38px 30px 39px 38px;
  background-color: ${Colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 152px;
  height: 143px;
  border-radius: 18px;
  object-fit: cover;
`;

export const CardText = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
