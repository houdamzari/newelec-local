import { useState } from "react";
import Flex from "../Flex/Flex";

function Dropdown({ label, addNewAvailable, optional, dropdownOptions }) {
  const [optionSelected, setOptionSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
      >
        <p>{label}</p>
        {addNewAvailable && <p>Add new+</p>}
        {optional && <p>Optional</p>}
      </Flex>

      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row justify-between border-2 cursor-pointer rounded-md px-4 py-2"
        >
          <Flex flexDirection="flex-row " gap="gap-[10px]">
            <img
              className="w-[30px]"
              src={optionSelected.icon}
              alt="option_icon"
            />
            {optionSelected.option}
          </Flex>
          <p className="rotate-[-90deg] ">&#10094;</p>
        </div>

        {open && (
          <div className="absolute top-[40px] w-full bg-white left-0">
            {dropdownOptions.map((option, i) => (
              <div
                key={option.option}
                onClick={() => setOptionSelected(dropdownOptions[i])}
                className="flex flex-row justify-between border-2 cursor-pointer rounded-md px-4 py-2"
              >
                <Flex flexDirection="flex-row" gap="gap-[10px]">
                  <img
                    className="w-[30px]"
                    src={option.icon}
                    alt="option_icon"
                  />
                  {option.option}
                </Flex>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
