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
        let isselected;
        let iscorrect;
        let correct;
        if (question.isAnswered) {
          isselected = question.selected === item.id;
          iscorrect = item.isCorrect;
          correct = question.isCorrectAnswer;
        } else {
          isselected = select === item.id;
          iscorrect = item.isCorrect;
          correct = corrected;
        }
        
        return (
          <Variant
            onClick={() => !question.isAnswered && updateData(item)}
            $isSelected={isselected}
            $isCorrect={item.isCorrect}
            $correct={correct}
            key={item.id}
          >
            {item.id}.{item.isCorrect ? `${item.variant} ✓` : item.variant}
          </Variant>
        );
      })}
    </VariantsWrapper>
  );
};

export default Variants;
