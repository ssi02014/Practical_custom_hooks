import React, { useState } from "react";

const useInput = (
  initialValue: string,
  validator: (value: string) => boolean
) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
