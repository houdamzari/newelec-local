import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`w-fit h-full bg-white p-4 rounded-md shadow-xl ${
        className ? className : " "
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
