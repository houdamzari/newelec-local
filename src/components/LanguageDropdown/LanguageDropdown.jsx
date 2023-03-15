import React,{useState} from 'react';
import Flex from "../Flex/Flex";
import useClickOutside from "../../hooks/useClickOutside";
function LanguageDropdown({dropdownOptions}) {
 const [optionSelected, setOptionSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(()=> setOpen(false))
  return (
    <div className="w-fit ">
      <div className="relative w-fit" ref={ref}>
        <div
          onClick={() => setOpen(!open)}
          className=" cursor-pointer rounded-full w-fit py-2 "
        >
            <img
               className="w-[42px]"
              src={optionSelected.icon}
              alt="option_icon"
            />
            {optionSelected.option}
        </div>

        {open && (
          <div className="absolute top-[60px] w-fit rounded bg-white left-0">
            {dropdownOptions.map((option, i) => (
              <div
                key={option.name}
                onClick={() => setOptionSelected(dropdownOptions[i])}
                className="flex flex-row justify-between  cursor-pointer rounded-md py-2"
              >
                <Flex flexDirection="flex-row" gap="gap-[10px]" className='px-6'>
                  <img
                    
                    src={option.icon}
                    
                    alt="option_icon"
                  />
                  {option.name}
                </Flex>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageDropdown;