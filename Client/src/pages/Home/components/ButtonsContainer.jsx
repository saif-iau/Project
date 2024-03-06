// import React from "react";
import style from "../Home.module.css";
import { useNavigate } from "react-router-dom";

const ButtonsContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.button_container}>
      <button className={style.button} onClick={() => navigate("login")}>
        Login
      </button>
      <button className={style.button} onClick={() => navigate("register")}>
        Register
      </button>
    </div>
  );
};

export default ButtonsContainer;
