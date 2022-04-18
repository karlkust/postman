import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Тема поста</h5>
        <h6 className="card-subtitle mb-2 text-muted">Имя пользователя</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="card-link">
          Редактировать пост
        </a>
        <a href="/" className="card-link">
          Удалить пост
        </a>
      </div>
    </div>
  );
};

export default Post;
