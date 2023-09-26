import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../questions";

const initialState = {
  questions: questions,
  currentQuestion: {},
  testStatus: false,
  correctAnswers: 0,
  questionIndex: 0,
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
        item.isAnswered = "false";
        item.selected = null;
        item.isCorrectAnswer = "false";
        if (item.type === "selectType") {
          item.selectedAnswers = [];
          item.select.forEach((select) => {
            select.isCorrect = "false";
            select.selected = null;
          });
        }
      });
    },
    endTest(state) {
      state.testStatus = false;
    },
    getQuestion(state, action) {
      state.currentQuestion = state.questions[action.payload];
      state.questionIndex = action.payload;
    },
    answer(state, action) {
      state.questions[state.currentQuestion.id - 1].isAnswered = "true";
      state.currentQuestion.isAnswered = "true";
      state.questions[state.currentQuestion.id - 1].selected =
        action.payload.id;
      state.currentQuestion.selected = action.payload.id;

      if (action.payload.id === state.currentQuestion.correct) {
        state.questions[state.currentQuestion.id - 1].isCorrectAnswer = "true";
        state.correctAnswers += 1;
      }
    },
    nextQuestion(state) {
      state.questionIndex += 1;
      state.currentQuestion = state.questions[state.questionIndex];
    },
    endTest(state) {
      state.testStatus = false;
    },
    selectAnswer(state, action) {
      state.currentQuestion.select[action.payload.id - 1].selected =
        action.payload;
      state.questions[state.currentQuestion.id - 1].select[
        action.payload.id - 1
      ].selected = action.payload;

      state.currentQuestion.selectedAnswers = [
        ...state.currentQuestion.selectedAnswers,
        action.payload,
      ];
      state.questions[state.currentQuestion.id - 1].selectedAnswers = [
        ...state.currentQuestion.selectedAnswers,
        action.payload,
      ];

      if (
        state.currentQuestion.select[action.payload.id - 1].correct ===
        action.payload.answer
      ) {
        state.questions[state.currentQuestion.id - 1].select[
          action.payload.id - 1
        ].isCorrect = "true";
        state.currentQuestion.select[action.payload.id - 1].isCorrect = "true";
      }

      if (
        state.currentQuestion.selectedAnswers.length ===
        state.currentQuestion.correctAnswers.length
      ) {
        const arr1 = state.currentQuestion.correctAnswers.sort(
          (a, b) => a.id - b.id
        );
        const arr2 = state.currentQuestion.selectedAnswers.sort(
          (a, b) => a.id - b.id
        );

        state.currentQuestion.isAnswered = "true";
        state.questions[state.currentQuestion.id - 1].isAnswered = "true";

        if (
          arr1.every((item, index) => {
            return (
              item.id === arr2[index].id && item.answer === arr2[index].answer
            );
          })
        ) {
          state.questions[state.currentQuestion.id - 1].isCorrectAnswer =
            "true";
          state.currentQuestion.isCorrectAnswer = "true";

          state.correctAnswers += 1;
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
