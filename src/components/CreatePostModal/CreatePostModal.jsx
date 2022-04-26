import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./CreatePostModal.css";
import AllPost from "../AllPosts/AllPost";
// const CreatePostModal = (props) => {
//   return (
//     <div className={props.activeCreate ? "newPost open" : "newPost"}>
//       <div className="create__modal">
//         <Routes>
//           <Route
//             path="/create"
//             element={
//               <>
//                 <h2>Создать POST</h2>
//                 <form className="createPost">
//                   <hr />
//                   <input type="url" placeholder="URL изображения" />
//                   <div className="card">
//                     <img
//                       src="https://avatars.mds.yandex.net/get-zen_doc/162989/pub_5d7faf4e2beb4900add612d6_5d7fafee6d29c100ac8f4ba7/scale_1200"
//                       className="card-img-top"
//                       alt="..."
//                     />
//                     <div className="card-body">
//                       <input type="text" placeholder="Заголовок поста" />
//                       <input type="text" placeholder="Текст поста" />
//                       <input
//                         type="text"
//                         placeholder="введите теги через запятую"
//                       />
//                     </div>
//                   </div>
//                   <button>Создать</button>
//                   <button>Отмена</button>
//                 </form>
//               </>
//             }
//           />
//         </Routes>
//         <div
//           className="modal__close"
//           onClick={() => {
//             props.changeActiveCreate(!props.activeCreate);
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             className="bi bi-x-circle"
//             viewBox="0 0 16 16"
//           >
//             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePostModal;

const CreatePostModal = () => {
  let requests = {
    getAllPosts: "https://api.react-learning.ru/posts",
    addOnePost: "https://api.react-learning.ru/posts",
    updateOnePost: "https://api.react-learning.ru/posts/:postId",
    getOnePost: "https://api.react-learning.ru/posts/:id",
    deleteOnePost: "https://api.react-learning.ru/posts/:postId",
  };

  let block = document.querySelector(".container");

  function setCard(obj) {
    return <AllPost />;
  }

  // let posts = localStorage.getItem("posts");
  // if (posts) {
  // } else {
  //   fetch(requests.getAllPosts)
  //     .then(function (ans) {
  //       return ans.json();
  //     })
  //     .then(function (data) {
  //       let arr = data.data;
  //       localStorage.setItem("posts", JSON.stringify(arr));
  //       arr.forEach(function (el) {
  //         block.innerHTML += setCard(el);
  //       });
  //     });
  // }

  function sendPost(body, form, cb) {
    fetch(requests.addOnePost, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "ok") {
          cb(body, form);
        }
      });
  }

  function doAfterAdd(obj, form) {
    block.innerHTML += setCard(obj);
    form.reset();
  }

  let form = document.forms.addPost;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let body = {};
    for (let i = 0; i < form.elements.length; i++) {
      let el = form.elements[i];
      if (el.name) {
        body[el.name] = el.value;
      }
    }
    console.log(body);
    sendPost(body, form, doAfterAdd);
  });

  return (
    <>
      <form className="post__popup" id="addPost">
        <h2 className="title-create-post">Создать POST</h2>
        <input
          type="text"
          name="image"
          placeholder="Ссылка на изображение"
          required
        />
        <input type="text" name="title" placeholder="Заголовок" />
        <textarea name="text" placeholder="Описание" required />
        <input type="text" name="tags" placeholder="Теги через запятую" />
        <button className="create-btn" type="submit">
          Создать POST
        </button>
      </form>
    </>
  );
};

export default CreatePostModal;
