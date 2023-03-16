import React from "react";
import Card from "../Card/Card";
import QuestionBox from "./QuestionBox/QuestionBox";
import { useHandleQuestions } from "../../hooks/useHandleQuestions";
function QuestionSection() {
  const { questions, addQuestions, deleteQuestions } = useHandleQuestions();
  return (
    <div className="flex justify-center">
      <div className="w-[1100px]">
        <Card className={"w-full xs:w-full px-[24px] py-[18px]"}>
          <p className="text-sm font-bold text-textColor-grey">Training</p>
          <p className="text-sm mt-[6px]">
            Here you can manage the questions by clicking on the “Add Question”
            button and choose from the available types of question. You can add
            up to 100 questions.
          </p>
          <hr className="mt-[17px]" />
          {questions.map((question) => (
            <QuestionBox data={question} key={question.id} deleteQuestions={deleteQuestions} />
          ))}

          <button className="w-full text-textColor-blue bg-[#E1EFFF] text-center py-[13px] rounded-md mt-[17px]"
          onClick={()=>addQuestions('This just is an intial state of a random question to test the add functionnality ')}>
            Add Question +
          </button>
        </Card>
      </div>
    </div>
  );
}

export default QuestionSection;
