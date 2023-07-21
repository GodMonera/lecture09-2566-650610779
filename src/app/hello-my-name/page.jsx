"use client";

import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [isGreetOk, setIsGreetOk] = useState(false);

  const nameInputOnChange = (event) => {
    setName(event.target.value);
  };

  const greetBtnOnClick = () => {
    if (name === "") {
      setResult("Please insert your name");
    } else {
      setResult(`Hello ${name} 😂`);
      setIsGreetOk(true);
    }
  };

  const resultClassName = isGreetOk ? "" : "text-danger";

  return (
    <div>
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInputOnChange}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnClick}>
        Greet Me
      </button>
      {/* Result Text */}
      <p className={resultClassName}> {result} </p>
    </div>
  );
}
