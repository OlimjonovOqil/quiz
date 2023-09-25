import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    id: 1,
    type: "standartType",
    question: "In cases of suffocation and cardiac arrest",
    variants: [
      {
        id: 1,
        variant: "In cases of suffocation and cardiac arrest",
        isCorrect: "true",
      },
      {
        id: 2,
        variant: "Only when the heart stops working",
        isCorrect: "false",
      },
      {
        id: 3,
        variant: "Kod preloma ekstremiteta",
        isCorrect: "false",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 1,
  },
  {
    id: 2,
    type: "imageType",
    question: "The sign of the authorized person in the picture means",
    image:
      "https://www.ixbt.com/img/n1/news/2022/5/5/b1733c13004feee878b4fc132977f8875ab5b0a4_large.png",
    variants: [
      {
        id: 1,
        variant: "In cases of suffocation and cardiac arrest",
        isCorrect: "true",
      },
      {
        id: 2,
        variant: "Only when the heart stops working",
        isCorrect: "false",
      },
      {
        id: 3,
        variant: "Kod preloma ekstremiteta",
        isCorrect: "false",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 1,
  },
  {
    id: 3,
    type: "standartType",
    question: "In cases of suffocation and cardiac arrest",
    variants: [
      {
        id: 1,
        variant: "Kod preloma ekstremiteta",
        isCorrect: "true",
      },
      {
        id: 2,
        variant: "Andrejin krst",
        isCorrect: "false",
      },
      {
        id: 3,
        variant: "Tabla za usmjeravanje",
        isCorrect: "false",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 1,
  },
  {
    id: 4,
    type: "imageType",
    question: "What is the order in which vehicles pass at this intersection?",
    image:
      "https://i.dailymail.co.uk/1s/2019/03/26/08/11464006-0-image-a-8_1553590337169.jpg",
    variants: [
      {
        id: 1,
        variant: "ITabla za usmjeravanje",
        isCorrect: "true",
      },
      {
        id: 2,
        variant: "Zabrana saobraćaja u oba smjera",
        isCorrect: "false",
      },
      {
        id: 3,
        variant: "Pretputokaz",
        isCorrect: "false",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 1,
  },
  {
    id: 5,
    type: "standartType",
    question: "In cases of suffocation and cardiac arrest",
    variants: [
      {
        id: 1,
        variant: "For drivers to slow down their vehicles",
        isCorrect: "true",
      },
      {
        id: 2,
        variant: "Only when the heart stops working",
        isCorrect: "false",
      },
      {
        id: 3,
        variant:
          "That the driver in whose direction the signal is given should speed up the movement of the vehicle",
        isCorrect: "false",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 1,
  },
];

const initialState = {
  questions: questions,
  currentQuestion: {},
  testStatus: false,
  correctAnswers: 0,
  questionIndex: 0,
};

const Questions = createSlice({
  name: "question",
  initialState,
  reducers: {
    startTest(state) {
      state.testStatus = true;
    },
    endTest(state) {
      state.testStatus = false;
    },
    getQuestion(state, action) {
      state.currentQuestion = state.questions[action.payload];
      state.questionIndex = action.payload ;
    },
    answer(state, action) {
      state.currentQuestion.isAnswered = "true";
      state.currentQuestion.selected = action.payload.id;
      if (action.payload.isCorrect) {
        state.currentQuestion.isCorrectAnswer === "true";
        state.correctAnswers += 1;
      }
    },
    nextQuestion(state) {
      state.questionIndex += 1;
      state.currentQuestion = state.questions[state.questionIndex];
    },
  },
});

export const { startTest, endTest, getQuestion, answer, nextQuestion } =
  Questions.actions;

export default Questions.reducer;
