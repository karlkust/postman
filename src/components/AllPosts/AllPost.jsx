import React from "react";
import "./AllPost.css";
import { useEffect, useState } from "react";

const AllPost = () => {
  const [posts, getPosts] = useState([{}]);

  useEffect(() => {
    fetch("https://api.react-learning.ru/posts", {
      headers: {
        authorization: "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        getPosts(data);
      });
  }, []);

  return (
    <div className="card">
      {!posts.err &&
        posts.map((p, i) => (
          <div className="all-card" key={i}>
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
              <div className="card-body">
                <h5>
                  <b>{p.title}</b>
                </h5>
                <p className="text">{p.text}</p>
              </div>
              <div className="tags">
                <span className="tag">{p.tags}</span>
              </div>
            </div>

            <div className="card-footer">
              <div className="likes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-box2-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
                  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
                </svg>
              </div>
              <div className="createDate">{p.created_at}</div>
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
