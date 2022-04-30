import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import Button from "../Button/Button";
import "./UserSinglePage.css";

const UserSinglePage = () => {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    api.getPersonalCard(id).then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    <div className="user-container">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{userInfo.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button text="Изменить" />
        </div>
      </div>
    </div>
  );
};

export default UserSinglePage;
