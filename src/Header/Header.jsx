import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconIn from "../icon/IconIn";
import IconLogin from "../icon/IconLogin";
import Page from "../Pages/AllPosts";

const Header = ({ modalActivity, setModalActivity }) => {
  const clickHandler = (e) => {
    setModalActivity(!modalActivity);
  };

  return (
    <div className="header">
      <h1 className="name">POSTS</h1>
      <Link to={Page}>Все посты</Link>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/login" onClick={clickHandler}>
          <IconIn />
          <br />
          Вход
        </Link>
        <Link to="/signup" onClick={clickHandler}>
          <IconLogin />
          <br />
          Регистрация
        </Link>
      </nav>
    </div>
  );
};

export default Header;
