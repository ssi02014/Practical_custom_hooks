import React from "react";
import useInput from "../hooks/useInput";

const Input = () => {
  const maxLen = (value: string): boolean => value.length <= 10;
  const attr = useInput("", maxLen);
  return (
    <div>
      <h1>useInput Hook value: {attr.value}</h1>
      <h2>Start Editing to see some Magic happen!</h2>
      <input type="text" placeholder="name" {...attr} />
    </div>
  );
};

export default Input;
