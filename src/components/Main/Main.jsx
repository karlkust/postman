import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import AllPost from "../AllPosts/AllPost.jsx";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AllPost />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
};

export default Main;
