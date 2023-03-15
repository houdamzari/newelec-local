import React, { useState } from 'react';
import Flex from "../Flex/Flex";
import useClickOutside from "../../hooks/useClickOutside";
import { logoutIcon, user } from '../../assets';

function SettingsDropdown({ dropdownOptions }) {
  const [optionSelected, setOptionSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false))
  return (
    <div className="w-full ">
        <div className="relative w-fit" ref={ref}>
          <div
            onClick={() => setOpen(!open)}
            className="w-fit  py-2 "
        >
          <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-center"}
        alignItems={"items-center"}
        gap="gap-[10px]"
        className="cursor-pointer">
            <img
               className="w-[32px]"
              src={user}
              alt="option_icon"
            />
              <Flex
        flexDirection={"flex-col"}
        justifyContent={"justify-center"}
        className=" cursor-pointer">
        <div className="w-[150px]">Blaise Deflo</div>
        <div className="text-xs text-gray-500">Administrator</div></Flex>

</Flex>
          </div>

          {open && (
            <div className="absolute top-[60px] w-[200px] bg-white left-0 rounded flex flex-col ">
              <div className="p-2">
                <div className="font-bold text-xs ">BESIX Group</div>
                <span className="text-gray-500 text-xs  border-black w-full ">besix.group@besix.be</span>
              </div><span className="w-full bg-gray-200 h-[1px]" />
              {dropdownOptions.map((option, i) => (
                <div
                  key={option.name}
                  onClick={() => setOptionSelected(dropdownOptions[i])}
                  className="flex flex-row justify-between  cursor-pointer rounded-md px-4 py-2 w-full"
                >

                  <Flex flexDirection="flex-row" gap="gap-[10px] w-[100%]" className='justify-start'>
                    <img

                      src={option.icon}

                      alt="option_icon"
                    />
                    <button className="w-fit text-sm">{option.name}</button>
                  </Flex>
                </div>
              ))}
              <span className="w-full bg-gray-200 h-[1px]" />
              <div className="px-4 py-2 w-full">
                <Flex flexDirection="flex-row" gap="gap-[10px] w-[100%]" className='justify-start'>
                  <img

                    src={logoutIcon}

                    alt="option_icon"
                  />
                  <button className="w-fit text-sm">Log out</button>
                </Flex></div>
            </div>
          )}

        </div>

    </div>
  );
}

export default SettingsDropdown;