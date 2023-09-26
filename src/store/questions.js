import { answer } from "./slices/Questions";

export const questions = [
  {
    id: 1,
    type: "standartType",
    question: "In cases of suffocation and cardiac arrest",
    variants: [
      {
        id: 1,
        variant: "In cases of suffocation and cardiac arrest",
        isCorrect: "false",
      },
      {
        id: 2,
        variant: "Only when the heart stops working",
        isCorrect: "true",
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
    correct: 2,
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
        isCorrect: "false",
      },
      {
        id: 2,
        variant: "Andrejin krst",
        isCorrect: "false",
      },
      {
        id: 3,
        variant: "Tabla za usmjeravanje",
        isCorrect: "true",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 3,
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
        isCorrect: "false",
      },
      {
        id: 2,
        variant: "Zabrana saobraćaja u oba smjera",
        isCorrect: "true",
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
    correct: 2,
  },
  {
    id: 5,
    type: "standartType",
    question: "In cases of suffocation and cardiac arrest",
    variants: [
      {
        id: 1,
        variant: "For drivers to slow down their vehicles",
        isCorrect: "false",
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
        isCorrect: "true",
      },
    ],
    isAnswered: "false",
    selected: null,
    isCorrectAnswer: "false",
    correct: 3,
  },
  {
    id: 6,
    type: "selectType",
    question: "Select match",
    select: [
      {
        id: 1,
        selected: null,
        isCorrect: "false",
        correct: 2,
        image:
          "https://uzavtoyolbelgi.uz/uploads/store/product/224db95d9663161ee7a9f42730b72db7.gif",
        options: [
          {
            id: 1,
            option: "In cases of suffocation and cardiac arrest",
            isCorrect: "false",
          },
          {
            id: 2,
            option: "Zabrana saobraćaja u oba smjera",
            isCorrect: "true",
          },
          {
            id: 3,
            option: "Tabla za usmjeravanje",
            isCorrect: "false",
          },
          {
            id: 4,
            option: "Pretputokaz",
            isCorrect: "false",
          },
        ],
      },
      {
        id: 2,
        selected: null,
        isCorrect: "false",
        correct: 3,
        image:
          "https://uzavtoyolbelgi.uz/uploads/store/product/c92cddf98d4d60a2aa3453a2588ce44d.gif",
        options: [
          {
            id: 1,
            option: "Tabla za usmjeravanje",
            isCorrect: "false",
          },
          {
            id: 2,
            option: "In cases of suffocation and cardiac arrest",
            isCorrect: "false",
          },
          {
            id: 3,
            option: "Andrejin krsе",
            isCorrect: "true",
          },
        ],
      },
      {
        id: 3,
        selected: null,
        isCorrect: "false",
        correct: 1,
        image:
          "https://academy-of-curiosity.ru/wp-content/uploads/2021/07/dvizhenie-peshehodov-zapreshheno.png",
        options: [
          {
            id: 1,
            option: "Pretputokaz",
            isCorrect: "true",
          },
          {
            id: 2,
            option: "Zabrana saobraćaja u oba smjera",
            isCorrect: "false",
          },
          {
            id: 3,
            option: "Andrejin krsе",
            isCorrect: "false",
          },
          {
            id: 4,
            option: "In cases of suffocation and cardiac arrest",
            isCorrect: "false",
          },
        ],
      },
      {
        id: 4,
        selected: null,
        isCorrect: "false",
        correct: 2,
        image:
          "https://uzavtoyolbelgi.uz/uploads/store/product/f6705e79d625d448ecfc51526c1540a5.jpg",
        options: [
          {
            id: 1,
            option: "Pretputokaz",
            isCorrect: "false",
          },
          {
            id: 2,
            option: "Zabrana saobraćaja u oba smjera",
            isCorrect: "true",
          },
          {
            id: 3,
            option: "Andrejin krsе",
            isCorrect: "false",
          },
          {
            id: 4,
            option: "In cases of suffocation and cardiac arrest",
            isCorrect: "false",
          },
        ],
      },
    ],
    isAnswered: "false",
    isCorrectAnswer: "false",
    selectedAnswers: [],
    correctAnswers: [
      { id: 1, answer: 2 },
      { id: 2, answer: 3 },
      { id: 3, answer: 1 },
      { id: 4, answer: 2 },
    ],
  },
];
