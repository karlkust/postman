import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
// import Button from "../Button/Button";
import "./UserSinglePage.css";

const UserSinglePage = () => {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  // const [editAva, patchEditAva] = useState();
  // const navigation = useNavigate();

  useEffect(() => {
    api.getPersonalCard(id).then((data) => {
      setUserInfo(data);
    });
  }, [id]);

  // const handlerAva = (e) => {
  //   e.preventDefault();
  //   api.editAvatar({ avatar: editAva }).then((ans) => {
  //     console.log(ans);
  //     alert(`Аватар изменён!`);
  //     navigation(`/usersinglepage/${id}`);
  //   });
  // };

  // useEffect(() => {
  //   api.editAvatar({ avatar: editAva }).then((data) => {
  //     patchEditAva(data);
  //   });
  // });

  return (
    <div className="user-container">
      <div className="card">
        <img src={userInfo.avatar} className="card-img-top" alt="Ваш аватар" />
        {/* <form onSubmit={handlerAva}>
          <input
            type="text"
            placeholder="avatar"
            name="avatar"
            className="in-reg"
            value={editAva}
            required
            onInput={(e) => patchEditAva(e.target.value)}
          />
        </form> */}
        <button className="submit" type="submit">
          Изменить аватар
        </button>

        <div className="card-body">
          <h2 className="card-title">{userInfo.name}</h2>
          <p className="card-text">{userInfo.about}</p>
        </div>
      </div>
    </div>
  );
};

export default UserSinglePage;
