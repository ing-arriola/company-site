import React from "react";
import FAQ from "../Components/Services/FAQ";
const FaqContainer = () => {
  const questions = [
    [
      {
        name: "Question 1",
        Question:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eaque.",
      },
      {
        name: "Question 2",
        Question:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi!",
      },
      {
        name: "Question 3",
        Question:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi!",
      },
    ],
    [
      {
        name: "Question 4",
        Question:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eaque.",
      },
      {
        name: "Question 5",
        Question:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi!",
      },
      {
        name: "Question 6",
        Question:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi!",
      },
    ],
  ];

  //questions.map((que) => que.map((el) => console.log(el)));

  return (
    <div>
      <FAQ questions={questions} />
    </div>
  );
};

export default FaqContainer;
