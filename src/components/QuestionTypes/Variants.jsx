import { useState } from "react";
import { Variant, VariantsWrapper } from "./Questions.styled";

const Variants = ({ question }) => {
  const [select, setSelect] = useState(null);
  const [correct, setCorrect] = useState(null);

  const updateData = async (id, item) => {
    setSelect(item.id);

    if (item.isCorrect) {
      setCorrect(true);
    }
  };

  return (
    <VariantsWrapper>
      {question.variants.map((item) => {
        const isSelected = select === item.id;
        const isCorrect = item.isCorrect === "true";
        // if (question.isAnswered) {
        //   isSelected = question.selected === item.id;
        //   isCorrect = question.isCorrectAnswer;
        // } else {
        //   isSelected = select === item.id;
        //   isCorrect = item.isCorrect === "true";
        // }
        // const isCorrect = item.isCorrect === "true";
        return (
          <Variant
            onClick={() =>
              // question.isAnswered === "false" &&
              updateData(question.id, item)
            }
            isSelected={isSelected}
            isCorrect={isCorrect}
            correct={correct}
            key={item.id}
          >
            {item.id}. {item.variant}
          </Variant>
        );
      })}
    </VariantsWrapper>
  );
};

export default Variants;
