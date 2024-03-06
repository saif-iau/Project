import React from "react";
import InputField from "./components/InputField";
import style from "../../Register.module.css";

const Form = () => {
  return (
    <div className={style.container}>
      <form>
        <fieldset>
          <legend>Register</legend>
          <div className={style.grid}>
            <div className={style.grid_item1}>
              <InputField
                title={"First Name"}
                type={"text"}
                placeholder={"First Name"}
              />
              <InputField
                title={"Last Name"}
                type={"text"}
                placeholder={"Last Name"}
              />
              <InputField
                title={"Email"}
                type={"email"}
                placeholder={"Email"}
              />
            </div>
            <div className={style.grid_item2}>
              <InputField
                title={"Mobile Number"}
                type={"number"}
                placeholder={"Mobile Number"}
              />
              <InputField
                title={"Address"}
                type={"text"}
                placeholder={"Address"}
              />
            </div>
            <div className={style.grid_item3}>
              <InputField
                title={"Password"}
                type={"password"}
                placeholder={"Password"}
              />
              <InputField
                title={"Confirm Password"}
                type={"password"}
                placeholder={"Confirm Password"}
              />
            </div>
          </div>

          <button type="submit" className={style.button}>
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
