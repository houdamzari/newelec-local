import React from "react";
import Card from "../Card/Card";
import QuestionBox from "./QuestionBox/QuestionBox";
function QuestionSection() {
  const data = [
    {
      id: 1,
      question:
        "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
    },
    {
      id: 2,
      question:
        "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
    },
  ];
  return (
    <div className="w-full justify-center flex">
      <Card className={"w-[1260px] px-[24px] py-[18px]"}>
        <p className="text-sm font-bold text-textColor-grey">Training</p>
        <p className="text-sm mt-[6px]">
          Here you can manage the questions by clicking on the “Add Question”
          button and choose from the available types of question. You can add up
          to 100 questions.
        </p>
        <hr className="mt-[17px]" />
        {data.map((question) => (
          <QuestionBox data={question} key={question.id}/>
        ))}

        <button className="w-full text-textColor-blue bg-[#E1EFFF] text-center py-[13px] rounded-md mt-[17px]">
          Add Question +
        </button>
      </Card>
    </div>
  );
}

export default QuestionSection;
