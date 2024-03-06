import React, { useState } from "react";
import InputField from "./components/InputField";
import style from "../../Login.module.css";
import axios from "axios";

const Form = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    let url = `http://192.168.100.142:3000/login`;
    axios
      .post(
        url,
        { email: username, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data);

        if (res.status == 200) {
          // alert(res.data);
        }
      })
      .catch((err) => alert("404 not found"));
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleLogin}>
        <fieldset>
          <legend>Login</legend>
          <InputField
            title={"Username"}
            type={"text"}
            placeholder={"Username"}
            setInput={(e) => setUsername(e)}
          />
          <InputField
            title={"Password"}
            type={"password"}
            placeholder={"Password"}
            setInput={(e) => setPassword(e)}
          />
          <button type="submit" className={style.button}>
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
