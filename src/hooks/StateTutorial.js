import React, { useState } from "react";
import Main from './Main';

const StateTutorial = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  return (
    <div>
    <Main/>
      <input
        name="field1"
        value={inputs.field1 || ""}
        onChange={handleChange}
      />
      <input
        name="field2"
        value={inputs.field2 || ""}
        onChange={handleChange}
      />
      <div>Field 1: {inputs.field1}</div>
      <div>Field 2: {inputs.field2}</div>
    </div>
  );
};

export default StateTutorial;
