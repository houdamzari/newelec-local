import { useState, useCallback } from "react";
import Flex from "../Flex/Flex";
import useClickOutside from "../../hooks/useClickOutside";
import { arrow } from "../../assets";
function Dropdown({
  label,
  addNewAvailable,
  optional,
  dropdownOptions,
  dropdownIcon,
  className,
}) {
  const [optionSelected, setOptionSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const handleSelectOption = useCallback(
    (i) => {
      setOptionSelected(dropdownOptions[i]);
      setOpen(false);
    },
    [optionSelected]
  );
  return (
    <div
      className={`w-full text-sm font-semibold ${className ? className : ""}`}
    >
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
      >
        <p className="text-textColor-grey">{label}</p>
        {addNewAvailable && <p className="text-textColor-blue">Add new+</p>}
        {optional && (
          <p className="text-textColor-lightGrey text-xs">Optional</p>
        )}
      </Flex>

      <div className="relative mt-[8px]" ref={ref}>
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row justify-between border-2 cursor-pointer rounded-md px-[12px] py-[9px]"
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

        {open && (
          <div className="absolute top-[40px] w-full bg-white border-2 left-0 z-[9999]">
            {dropdownOptions.map((option, i) => (
              <div
                key={option.option}
                onClick={() => handleSelectOption(i)}
                className="flex flex-row justify-between  cursor-pointer rounded-md px-4 py-2"
              >
                <Flex flexDirection="flex-row" gap="gap-[10px]">
                  {icon && (
                    <img
                      className="w-[30px]"
                      src={option.icon}
                      alt="option_icon"
                    />
                  )}

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
