// import React from "react";
import { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import style from "./Home.module.css";

const Home = () => {
  const [hasUserLoggedIn, setHasUserLoggedIn] = useState(false);
  const [labelUserFinal,setLabelUserFinal]=useState("value")
  const  handleLogin=()=>{}
  
  return (
    <div className={style.container}>
      <h1>Welcome To Home page</h1>
      {!hasUserLoggedIn && <ButtonsContainer />}
      {hasUserLoggedIn && (
        <>
          <h2>Logged In</h2>
        </>
      )}
      {hasUserLoggedIn ? <></> : <>{false}</>}
    </div>
  );
};

export default Home;
