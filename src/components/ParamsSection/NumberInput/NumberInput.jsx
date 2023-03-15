import React, { useState } from "react";
import { plus, minus } from "../../../assets";
function NumberInput({ unit }) {
  const [number, setNumber] = useState(0);
  return (
    <div className="flex flex-row justify-center items-center gap-[5px] mt-[18px] ">
      <img
        className="cursor-pointer"
        onClick={() => (number > 0 ? setNumber(number - 1) : null)}
        src={minus}
        alt="minus"
      />
      <div className="flex justify-center border-2 border-textColor-blue text-textColor-blue px-[26px] py-[4px] rounded-md text-sm">{`${number}${
        unit ? unit : ""
      }`}</div>
      <img
        onClick={() => setNumber(number + 1)}
        className="cursor-pointer"
        src={plus}
        alt="plus"
      ></img>
    </div>
  );
}

export default NumberInput;
