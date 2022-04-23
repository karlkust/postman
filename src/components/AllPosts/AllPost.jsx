import React from "react";
import "./AllPost.css";
import { useEffect, useState } from "react";

const AllPost = () => {
  const [posts, getPosts] = useState([{}]);

  useEffect(() => {
    fetch("https://api.react-learning.ru/posts", {
      headers: {
        authorization:
          ,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getPosts(data);
      });
  }, []);

  return (
    <div className="card">
      {!posts.err &&
        posts.map((p, i) => (
          <div className="all-card">
            <div className="card-header">
              <div className="author_info" key={i}>
                {p.author.avatar && (
                  <img className="avatar" src={p.author.avatar} alt="avatar" />
                )}
                <div className="nickname">{p.author.name}</div>
                <div className="about">{p.author.about}</div>
              </div>
            </div>

            <div className="card-content" key={i}>
              <img
                className="authors-pic"
                src={p.image}
                alt="Ваше изображение"
              />
            </div>

            <a href="/" className="card-link">
              Редактировать пост
            </a>

            <a href="/" className="card-link">
              Удалить пост
            </a>
          </div>
        ))}
    </div>
  );
};

export default AllPost;
