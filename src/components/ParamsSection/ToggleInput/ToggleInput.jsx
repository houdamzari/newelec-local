import { useState } from "react";

function ToggleInput() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full flex justify-center mt-[25px]">
      <div
        className="relative w-[35px] h-[18px] bg-[#DAFFDF] rounded-full cursor-pointer transition-all"
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`absolute ${
            toggle ? "right-0" : "left-0"
          } top-[-2px] w-[22px] h-[22px] rounded-full ${
            toggle ? "bg-[#47CA5B]" : "bg-grey"
          } shadow-sm`}
        ></div>
      </div>
    </div>
  );
}

export default ToggleInput;
