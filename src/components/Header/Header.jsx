import React, { useContext } from "react";
import { UserCtx } from "../Context/UserContext";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserCtx);

  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="name">Ten O'Clock POSTman</h1>
      </Link>

      <nav>
        <Link to={`/usersinglepage/${user}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-file-earmark-person"
            viewBox="0 0 16 16"
          >
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
        </Link>

        <Link to={user ? "/signup" : "/signin"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
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
      </nav>
    </div>
  );
};

export default Header;
