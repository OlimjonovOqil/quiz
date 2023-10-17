import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../questions";

const initialState = {
  questions: questions,
  testStatus: false,
  questionIndex: 0,
  correctAnswers: 0,
  percentage: 0,
};

const Questions = createSlice({
  name: "question",
  initialState,
  reducers: {
    startTest(state) {
      state.testStatus = true;
      state.correctAnswers = 0;
    },
    finishTest(state) {
      state.testStatus = "finished";

      state.percentage = Math.ceil(
        (state.correctAnswers * 100) / state.questions.length
      );

      state.questions.forEach((item) => {
        item.isAnswered = false;
        item.selected = null;
        item.isCorrectAnswer = false;
        if (item.type === "selectType" && item.select) {
          item.selectedAnswers = [];
          item.select.forEach((select) => {
            select.isCorrect = false;
            select.selected = null;
          });
        }
      });
    },
    endTest(state) {
      state.testStatus = false;
    },
    getQuestion(state, action) {
      state.questionIndex = action.payload;
    },
    answer(state, action) {
      state.questions[state.questionIndex].isAnswered = true;
      state.questions[state.questionIndex].selected = action.payload.id;
      if (action.payload.id === state.questions[state.questionIndex].correct) {
        state.questions[state.questionIndex].isCorrectAnswer = true;
        state.correctAnswers += 1;
      }
    },
    nextQuestion(state) {
      state.questionIndex += 1;
      state.currentQuestion = state.questions[state.questionIndex];
    },
    selectAnswer(state, action) {
      if (
        state.questions[state.questionIndex].select &&
        state.questions[state.questionIndex].selectedAnswers &&
        state.questions[state.questionIndex].correctAnswers
      ) {
        state.questions[state.questionIndex].select[
          action.payload.id - 1
        ].selected = action.payload;

        state.questions[state.questionIndex].select[
          action.payload.id - 1
        ].selected = action.payload;

        state.questions[state.questionIndex].selectedAnswers = [
          ...state.questions[state.questionIndex].selectedAnswers,
          action.payload,
        ];

        if (
          state.questions[state.questionIndex].select[action.payload.id - 1]
            .correct === action.payload.answer
        ) {
          state.questions[state.questionIndex].select[
            action.payload.id - 1
          ].isCorrect = true;
        }

        if (
          state.questions[state.questionIndex].selectedAnswers.length ===
          state.questions[state.questionIndex].correctAnswers.length
        ) {
          const arr1 = state.questions[state.questionIndex].correctAnswers.sort(
            (a, b) => a.id - b.id
          );
          const arr2 = state.questions[
            state.questionIndex
          ].selectedAnswers.sort((a, b) => a.id - b.id);

          state.questions[state.questionIndex].isAnswered = true;

          if (
            arr1.every((item, index) => {
              return (
                item.id === arr2[index].id && item.answer === arr2[index].answer
              );
            })
          ) {
            state.questions[state.questionIndex].isCorrectAnswer =true;
            state.correctAnswers += 1;
          }
        }
      }
    },
  },
});

export const {
  startTest,
  endTest,
  getQuestion,
  answer,
  nextQuestion,
  finishTest,
  selectAnswer,
} = Questions.actions;

export default Questions.reducer;
