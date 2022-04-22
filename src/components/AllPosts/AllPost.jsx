import React from "react";
import "./AllPost.css";
import { useEffect, useState } from "react";

const AllPost = () => {
  const [posts, getPosts] = useState([{}]);

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
          <>
            <div className="card-body">
              <h4 className="card-title" key={i}>
                ИМЯ ПОЛЬЗОВАТЕЛЯ
              </h4>
              <h6 className="card-id">{p._id}</h6>
              <h6 className="card-created" key={i}>
                {p.created_at}
              </h6>

              <h6 className="card-subtitle mb-2 text-muted">{p.title}</h6>

              <p className="card-text" key={i}>
                {p.text}
              </p>
              <img className="card-img" src={p.image} key={i} alt="img" />
              <a href="/" className="card-link">
                Редактировать пост
              </a>

              <a href="/" className="card-link">
                Удалить пост
              </a>
            </div>

            {/* <div className="card-comments">комментарии</div> */}
          </>
        ))}
    </div>
  );
};

export default AllPost;
