import React from "react";
import style from "../../../Login.module.css";
const InputField = ({ title, Input, setInput, placeholder, type }) => {
  return (
    <div className={style.inputfield_container}>
      <p htmlFor="" className={style.label}>
        <label htmlFor="">{title}</label>
      </p>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        className={style.inputfield}
      />
    </div>
  );
};

export default InputField;
