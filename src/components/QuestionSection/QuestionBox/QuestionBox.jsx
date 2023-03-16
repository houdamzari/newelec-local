import { useState } from "react";
import Flex from "../../Flex/Flex";
import { cross, upload } from "../../../assets";
import Card from "../../Card/Card";
import FileInput from "../../FileInput/FileInput";
import Tooltip from "../../Tooltip/Tooltip";
import Checkbox from "./Checkbox";
function QuestionBox({ data,deleteQuestions}) {
  const [answer, setAnswer] = useState("True");
  return (
    <Flex
      className={"bg-[#F8F8F8] rounded-md px-[30px] py-[23px] mt-[17px]"}
      flexDirection="flex-row xs:flex-col"
      justifyContent="justify-between"
      gap={"gap-[38px]"}
    >
      <Flex flexDirection={"flex-col"} className='w-full'  gap={"gap-[10px]"}>
        <Flex
          flexDirection={"row"}
          justifyContent={"justify-between"}
          alignItems={"items-center"}
        >
          <p className="text-base font-bold">Question {data.id}</p>
          <img
            className="w-[12px] h-[12px] cursor-pointer"
            src={cross}
            alt="cross"
            onClick={()=> deleteQuestions(data.id)}
          />
        </Flex>
        <Card className={"px-[10px] py-[8px] w-full text-sm"}>
          {data.question}
        </Card>
        <Card
          className={
            "px-[10px] py-[8px] w-full text-sm flex flex-row justify-between items-center "
          }
        >
          True
          <div className="flex flex-row gap-[13px] items-center">
            <Checkbox
              checked={answer === "True"}
              onClick={() => setAnswer("True")}
            />
            <Tooltip content="image upload">
              <img className={"w-[24px]"} src={upload} alt="upload" />
            </Tooltip>
          </div>
        </Card>
        <Card
          className={
            "px-[10px] py-[8px] w-full text-sm flex flex-row justify-between items-center "
          }
        >
          False
          <div className="flex flex-row gap-[13px] items-center">
            <Checkbox
              checked={answer === "False"}
              onClick={() => setAnswer("False")}
            />
            <Tooltip content="image upload">
              <img className={"w-[24px]"} src={upload} alt="upload" />
            </Tooltip>
          </div>
        </Card>
      </Flex>
      <div className="w-[294px] xs:w-full">
        <Flex
          flexDirection="flex-row"
          justifyContent="justify-between"
          alignItems={"items-center"}
        >
          <p className="text-sm text-textColor-grey">Question Image</p>
          <p className="text-xs text-[#B6B6B6]">Optional</p>
        </Flex>
        <FileInput className={"py-[40px] xs:w-full xs:px-0 mt-2"} />
      </div>
    </Flex>
  );
}

export default QuestionBox;
