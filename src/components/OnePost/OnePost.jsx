// import React from "react";
// import "../AllPosts/AllPost.css";
// const OnePost = (props) => {
//   return (
//     <div className="card">
//       <div className="all-card">
//         <div className="card-header">
//           <div className="author_info">
//             {props.author && (
//               <img className="avatar" src={props.author.avatar} alt="avatar" />
//             )}
//             {props.author && (
//               <div className="nickname">{props.author.name}</div>
//             )}
//             {props.author && <div className="about">{props.author.about}</div>}
//           </div>
//         </div>
//         <hr />
//         <div className="card-content">
//           <img
//             className="authors-pic"
//             src={props.image}
//             alt="Ваше изображение"
//           />
//           <div className="card-body">
//             <h5>
//               <b>{this.props.title}</b>
//             </h5>
//             <p className="text">{props.text}</p>
//           </div>
//           <div className="tags">
//             <span className="tag">{props.tags}</span>
//           </div>
//         </div>

//         <div className="card-footer">
//           <div className="likes">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="36"
//               height="36"
//               fill="currentColor"
//               className="bi bi-box2-heart"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
//               <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
//             </svg>
//           </div>
//           <div className="createDate">{props.created_at}</div>
//         </div>

//         <a href="/" className="card-link">
//           Редактировать POST
//         </a>

//         <a href="/" className="card-link">
//           Удалить POST
//         </a>
//       </div>
//     </div>
//   );
// };

// export default OnePost;
