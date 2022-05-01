import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import "./UserSinglePage.css";

const UserSinglePage = () => {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [nameInfo, changeNameInfo] = useState();

  useEffect(() => {
    api.editProfile().then((data) => {
      changeNameInfo(data);
    });
  }, []);

  useEffect(() => {
    api.getPersonalCard(id).then((data) => {
      setUserInfo(data);
    });
  }, [id]);

  return (
    <div className="user-container">
      <div className="card">
        <img src={userInfo.avatar} className="card-img-top" alt="Ваш аватар" />
        {/* <button className="submit" type="submit">
          Изменить аватар
        </button> */}

        <div className="card-body">
          <h2 className="card-title">{userInfo.name}</h2>
          <p className="card-text">{userInfo.about}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSinglePage;
