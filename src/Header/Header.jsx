import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ modalActivity, setModalActivity }) => {
  const clickHandler = (e) => {
    setModalActivity(!modalActivity);
  };

  return (
    <div className="header">
      <h1 className="name">POSTS</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/login" onClick={clickHandler}>
          Вход
        </Link>
        <Link to="/signup" onClick={clickHandler}>
          Регистрация
        </Link>
      </nav>
    </div>
  );
};

export default Header;
