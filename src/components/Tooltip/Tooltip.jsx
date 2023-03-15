import React, { useState } from "react";

function Tooltip({ children, content }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative z-[999999]">
      <div
        className="cursor-pointer"
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
      >
        {children}
      </div>
      {
        <div className="absolute top-[15px] left-[-45px] w-[100px] flex justify-center items-center flex-col z-[999999] shadow-lg">
          <div className="clip w-[10px] h-[10px] bg-white"></div>
          <p className="text-[10px] bg-white  p-[5px] ">{content}</p>
        </div>
      }
    </div>
  );
}

export default Tooltip;
