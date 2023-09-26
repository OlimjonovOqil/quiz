import { styled } from "styled-components";
import Colors from "../../Constants/Colors";

export const QuestionTitle = styled.p`
  color: ${Colors.primary};
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const VariantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Variant = styled.div`
  width: ${({ $w }) => $w || "100%"};
  text-align: start;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid ${Colors.background};
  cursor: pointer;
  background-color: ${({ $isSelected, $isCorrect, $correct }) => {
    if (
      ($isSelected && $isCorrect) ||
      (!$isSelected && $isCorrect && $correct)
    ) {
      return "green";
    }
    if ($isSelected && !$isCorrect) {
      return "red";
    }
    if (!$isCorrect && !$isSelected && $correct) {
      return "white";
    }
  }};

  color: ${({ $isSelected, $isCorrect, $correct }) => {
    if (
      ($isSelected && $isCorrect) ||
      (!$isSelected && $isCorrect && $correct) ||
      ($isSelected && !$isCorrect)
    ) {
      return "white";
    }
    if (!$isCorrect && !$isSelected) {
      return "black";
    }
  }};
`;

export const NextQuestion = styled.button`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.btn};
  color: ${Colors.white};
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;
  max-width: 150px;
  width: 100%;
  margin: 30px auto;
  border: 0;
  display: ${({ dp }) => dp || "block"};
`;
