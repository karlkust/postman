import React from "react";
import Button from "../Button/Button";
import { Routes, Route, Link } from "react-router-dom";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={props.active ? "modal active" : "modal"}>
      <div className="modal__container">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <h2>Войти</h2>
                <Button text="Войти" type="yellow" />
                <Link to="/signup">
                  <Button text="Регистрация" />
                </Link>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <h2>Регистрация</h2>
                <Button text="Зарегистрироваться" type="yellow" />
                <Link to="/login">
                  <Button text="Войти" />
                </Link>
              </>
            }
          />
        </Routes>
        <div
          className="modal__close"
          onClick={(e) => {
            props.changeActive(!props.active);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
