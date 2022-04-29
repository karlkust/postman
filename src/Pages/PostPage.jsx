// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../Api";

// const PostPage = () => {
//   let { id } = useParams();
//   const [title, setTitle] = useState("Post");
//   const [postCard, setPostCard] = useState({});

//   useEffect(() => {
//     api.getSinglePost(id).then((data) => {
//       setPostCard(data);
//     });
//   }, []);

//   return (
//     <>
//       <h1>{postCard.title || "Post"}</h1>
//       <p>{id}</p>
//     </>
//   );
// };

// export default PostPage;
