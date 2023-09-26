import { useEffect, useState } from "react";
import { Variant, VariantsWrapper } from "./Questions.styled";
import { useDispatch } from "react-redux";
import { answer } from "../../store/slices/Questions";

const Variants = ({ question }) => {
  const [select, setSelect] = useState(null);
  const [corrected, setCorrected] = useState(null);

  const dispatch = useDispatch();

  const updateData = async (item) => {
    setSelect(item.id);

    if (item.isCorrect) {
      setCorrected(true);
    }

    dispatch(answer(item));
  };

  useEffect(() => {
    setSelect(null);
    setCorrected(null);
  }, [question.id]);

  return (
    <VariantsWrapper>
      {question.variants.map((item) => {
        let isslected;
        let iscorrect;
        let correct;
        if (question.isAnswered === "true") {
          isslected = question.selected === item.id;
          iscorrect = item.isCorrect === "true";
          correct = !!question.isCorrectAnswer;
        } else {
          isslected = select === item.id;
          iscorrect = item.isCorrect === "true";
          correct = corrected;
        }
        return (
          <Variant
            onClick={() => question.isAnswered === "false" && updateData(item)}
            $isSelected={isslected}
            $isCorrect={iscorrect}
            $correct={correct}
            key={item.id}
          >
            {item.id}.{" "}
            {item.isCorrect === "true" ? `${item.variant} ✓` : item.variant}
          </Variant>
        );
      })}
    </VariantsWrapper>
  );
};

export default Variants;
