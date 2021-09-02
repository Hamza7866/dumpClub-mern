import React from "react";
import style from "./Home.module.css";
import Card from "../../components/shared/card/Card";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const history = useHistory();
  const startRegister = () => {
    history.push("/register");
  };
  return (
    <div className={`${style.cardWrapper} conatiner`}>
      <Card title="Welcome to DumbClub" icon="/images/logo.png">
        <p className={style.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button text="Get your username" onClick={startRegister} />
        </div>
        <div className={style.signinWrapper}>
          <span className={style.hasInvite}>Have an invite text?</span>
          <Link to="/login" className={style.loginLink}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
