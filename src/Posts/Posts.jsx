import React from "react";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Posts = ({ goods }) => {
  return (
    <div className="container">
      {goods.map((el) => (
        <Link to={"/posts/" + el._id} key={el._id}>
          <Post {...el} key={el._id} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
