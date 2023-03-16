import React from "react";
import { arrow } from "../../../assets";
import Flex from "../../Flex/Flex";
function DropdownBox({ open, setOpen, borderless, optionSelected }) {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`flex flex-row justify-between cursor-pointer rounded-md px-[12px] py-[9px] ${
        borderless ? "border-0" : "border-2"
      } `}
    >
      <Flex flexDirection="flex-row " gap="gap-[10px]">
        {optionSelected.icon && (
          <img
            className="w-[20px]"
            src={optionSelected.icon}
            alt="option_icon"
          />
        )}
        {optionSelected.option}
      </Flex>
      <img src={arrow} alt="arrow" />
    </div>
  );
}

export default DropdownBox;
