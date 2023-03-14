import React from "react";

function Card({ children }) {
  return (
    <div className="w-full h-full bg-white p-4 rounded-md shadow-xl">
      {children}
    </div>
  );
}

export default Card;
