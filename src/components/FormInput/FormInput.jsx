import React, { useState } from "react";
import { icon, deleteIcon } from "../../assets";
import Flex from "../Flex/Flex";

function FormInput() {
  const [inputValue, setInputValue] = useState("Working at height");
  return (
    <div className="w-[309px] xs:w-full">
      <p className="text-textColor-grey text-sm font-semibold">Training</p>
      <div className="relative border-2 rounded-md px-[12px] py-[9px] mt-[8px] ">
        <input
          type="text"
          value={inputValue}
          className="outline-none text-sm font-semibold"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Flex
          className={"absolute right-[10px] top-[10px] "}
          flexDirection={"flex-row"}
          alignItems={"item-center"}
          justifyContent={"justify-center"}
          gap={"gap-[5px]"}
        >
          <img src={icon} alt="icon" />
          {inputValue && (
            <img
              onClick={() => setInputValue("")}
              src={deleteIcon}
              className="cursor-pointer"
              alt="delete"
            />
          )}
        </Flex>
      </div>
    </div>
  );
}

export default FormInput;
