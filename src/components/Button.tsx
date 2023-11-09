"use client";
import React, { useEffect } from "react";

const Button = () => {
  const [count, setCount] = React.useState(5);

  const handleClick = () => {
    setCount((count) => count - 1);
  };

  if (count === 0) {
    throw new Error("I crashed!");
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Click me to throw an error in {count}
    </button>
  );
};

export default Button;
