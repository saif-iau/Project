// import React from "react";
import style from "./Login.module.css";
import Form from "./components/Form/Form";

const Login = () => {
  return (
    <div className={style.login_container}>
      {/* <h1>Login</h1> */}
      <Form />
    </div>
  );
};

export default Login;
