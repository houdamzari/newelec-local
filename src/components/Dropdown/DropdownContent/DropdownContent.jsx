import React from "react";
import Flex from "../../Flex/Flex";
function DropdownContent({ dropdownOptions }) {
  return (
    <div className="absolute top-[40px] w-full bg-white border-2 left-0 z-[9999]">
      {dropdownOptions.map((option, i) => (
        <div
          key={option.option}
          onClick={() => handleSelectOption(i)}
          className="flex flex-row justify-between  cursor-pointer rounded-md px-4 py-2"
        >
          <Flex flexDirection="flex-row" gap="gap-[10px]">
            {option.icon && (
              <img className="w-[30px]" src={option.icon} alt="option_icon" />
            )}

            {option.option}
          </Flex>
        </div>
      ))}
    </div>
  );
}

export default DropdownContent;
