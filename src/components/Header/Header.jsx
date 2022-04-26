import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
  modalActivity,
  setModalActivity,
  modalActivityIn,
  setModalActivityIn,
}) => {
  const clickHandler = (e) => {
    setModalActivity(!modalActivity);
  };

  const clickHandlerIn = (e) => {
    setModalActivityIn(!modalActivityIn);
  };

  //ПРОСЬБА ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ:

  // let nameEl = document.querySelector("h2>span");

  // let name = localStorage.getItem("name");
  // if (name) {
  //   nameEl.innerText = name;
  // } else {
  //   name = alert("Пожалуйста, войдите, или зарегистрируйтесь!", "");
  //   if (name) {
  //     nameEl.innerText = name;
  //     localStorage.setItem("name", name);
  //   }
  // }

  return (
    <div className="header">
      <h1 className="name">Ten O'Clock Postman</h1>
      <h2 className="guestsName">
        <span>Гость</span>
      </h2>

      <nav
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to="/login" onClick={clickHandlerIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fillRule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </Link>
        <Link to="/signup" onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-clipboard2-check"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
          </svg>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
