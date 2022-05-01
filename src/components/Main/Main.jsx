import React from "react";
import { Route, Routes } from "react-router-dom";
import UserSinglePage from "../UserSinglePage/UserSinglePage";
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import AllPost from "../AllPosts/AllPost.jsx";
import Comments from "../Comments/Comments";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AllPost />} />
        <Route path="/usersinglepage/:id" element={<UserSinglePage />} />
        <Route path="/comments/:id" element={<Comments />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
};

export default Main;
