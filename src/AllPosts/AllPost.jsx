import React from "react";
import "./AllPost.css";
import { useEffect, useState } from "react";

const AllPost = () => {
  const [posts, getPosts] = useState([{ title: "", text: "", comments: "" }]);

  useEffect(() => {
    fetch("https://api.react-learning.ru/posts", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1YTVmNTk0N2M3MjkyZDhjMjA0ZTkiLCJpYXQiOjE2NDk3ODAyMTksImV4cCI6MTY4MTMxNjIxOX0.rKMiNAcYsxkJAPdbjlYJ-py6VY0Ko4S6WDB7_rZBbUU",
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
          <div className="card-body">
            <h5 className="card-title" key={i}>
              {p.title}
            </h5>

            <h6 className="card-subtitle mb-2 text-muted">ИМЯ АВТОРА</h6>

            <p className="card-text" key={i}>
              {p.text}
            </p>

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
