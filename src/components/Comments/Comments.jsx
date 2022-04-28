// import React, { useEffect, useState } from "react";
// import api from "../../Api";
// import "./Comments.css";

// const Comments = () => {
//   const [allComments, getAllComments] = useState([]);

//   useEffect(() => {
//     api.getAllComments().then((data) => {
//       getAllComments(data);
//     });
//   }, []);
//   // console.log({ allComments });

//   return (
//     <div className="comments">
//       {!allComments.err &&
//         allComments.map((c, o) => (
//           <div className="comments-container" key={o}>
//             <img
//               className="comments-avatar"
//               src={c.author.avatar}
//               alt="avatar"
//             />
//             <div className="comments-author">{c.author.name}</div>
//             <span className="comments-data">{c.created_at}</span>
//             <div className="comments-text">{c.text}</div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Comments;
