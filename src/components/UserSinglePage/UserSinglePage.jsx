import React from "react";
import Button from "../Button/Button";
import "./UserSinglePage.css";

const UserSinglePage = () => {
  // useEffect(() => {
  //   api.getPersonalCard.then((data) => {
  //     getPerson(data);
  //     console.log(getPerson);
  //   });
  // }, []);

  return (
    <div className="user-container">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">NAME</h5>
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
