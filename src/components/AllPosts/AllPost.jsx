import React, { useContext } from "react";
import "./AllPost.css";
import { useEffect, useState } from "react";
import api from "../../Api";
import { Link, useParams } from "react-router-dom";

const AllPost = () => {
  const [posts, getPosts] = useState([]);
  const postsRev = posts.reverse();

  const { id } = useParams();

  useEffect(() => {
    api.getPosts(id).then((data) => {
      getPosts(data);
      console.log(data);
    });
  }, []);

  // useEffect(() => {
  //   api.addLike().then((data) => {
  //     putPlusLike(data);
  //   });
  // }, [plusLike]);

  return (
    <div className="card">
      {!postsRev.err &&
        postsRev.map((p, i) => (
          <div className="all-card" key={i}>
            <div className="card-header">
              <div className="author_info" key={i}>
                {p.author && (
                  <img className="avatar" src={p.author.avatar} alt="avatar" />
                )}
                {p.author && <div className="nickname">{p.author.name}</div>}
                {p.author && <div className="about">{p.author.about}</div>}
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
                <div className="tags">
                  <span className="tag">{p.tags}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button className="likes" type="button">
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
                <span className="like-langth">{p.likes.length}</span>
              </button>

              <span className="createDate">{p.created_at}</span>
            </div>
            <Link to={`/posts/comments/${id}`}>
              <div className="comments">
                <button className="comment-btn" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-chat-square-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <span className="comments-length">{p.comments.length}</span>
                </button>
              </div>
            </Link>

            {/* <a href="/" className="card-link">
              Редактировать POST
            </a>

            <a href="/" className="card-link">
              Удалить POST
            </a> */}
          </div>
        ))}
    </div>
  );
};

export default AllPost;
