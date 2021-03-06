import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import api from "../../Api";
import { UserCtx } from "../Context/UserContext";

const Auth = ({ login }) => {
  const [val, changeVal] = useState("");
  const [pwd, changePwd] = useState("");
  // const [ava, changeAva] = useState("");
  // const [nme, changeNme] = useState("");

  const { setUser, setToken } = useContext(UserCtx);
  const navigation = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    if (login) {
      api.login({ email: val, password: pwd }).then((ans) => {
        console.log(ans);
        if (ans.data) {
          setUser(ans.data._id);
          setToken(ans.token);
        }
        alert(`Привет, ${ans.data.name}`);
        navigation("/");
      });
    } else {
      console.log(val);
      api.signup({ email: val, password: pwd }).then((ans) => {
        if (ans._id || ans.err.statusCode === 409) {
          navigation("/signin");
        }
      });
    }
  };
  return (
    <div className="auth-container">
      <form className="auth" onSubmit={handler}>
        <h1>{login ? "Вход" : "Регистрация"}</h1>

        {/* <input
          type="text"
          placeholder="name"
          name="name"
          className="in-reg"
          value={nme}
          required
          onInput={(e) => changeNme(e.target.value)}
        /> */}

        {/* <input
          type="url"
          placeholder="avatar"
          name="avatar"
          className="in-reg"
          value={ava}
          required
          onInput={(e) => changeAva(e.target.value)}
        /> */}

        <input
          type="email"
          placeholder="email"
          name="email"
          className="in-reg"
          value={val}
          required
          onInput={(e) => changeVal(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="in-reg"
          value={pwd}
          required
          onInput={(e) => changePwd(e.target.value)}
        />

        <button className="submit" type="submit">
          {login ? "Войти" : "Зарегистрироваться"}
        </button>
        <Link to={login ? "/signup" : "/signin"}>
          <button className="submit" type="button">
            {login ? "Регистрация" : "Вход"}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Auth;
