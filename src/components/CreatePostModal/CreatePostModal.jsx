import React, { useContext } from "react";
// import { Route, Routes } from "react-router-dom";
import "./CreatePostModal.css";
import AllPost from "../AllPosts/AllPost";
import { UserCtx } from "../Context/UserContext";
import api from "../../Api";
const CreatePostModal = () => {
  const { setUser, setToken } = useContext(UserCtx);
  let requests = {
    addOnePost: "https://api.react-learning.ru/posts",
  };

  let block = document.querySelector(".container");

  function setCard(obj) {
    return <AllPost />;
  }

  let posts = localStorage.getItem("posts");
  if (posts) {
  } else {
    fetch(requests.getAllPosts)
      .then(function (ans) {
        return ans.json();
      })
      .then(function (data) {
        let arr = data.data;
        localStorage.setItem("posts", JSON.stringify(arr));
        arr.forEach(function (el) {
          block.innerHTML += setCard(el);
        });
      });
  }

  function sendPost(body, form, cb) {
    fetch(requests.addOnePost, {
      method: "post",
      headers: {
        authorization: `Bearer ${api.token}`,
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

  // function doAfterAdd(obj, form) {
  //   block.innerHTML += setCard(obj);
  //   form.reset();
  // }

  // let form = document.forms.addPost;

  const sentForm = function (e) {
    e.preventDefault();
    let form = e.target;
    console.log(form.elements);

    let body = {};
    for (let i = 0; i < form.elements.length; i++) {
      let el = form.elements[i];
      if (el.name) {
        if (el.name === "tags") {
          body[el.name] = el.value.split(",");
        } else {
          body[el.name] = el.value;
        }
      }
    }
    sendPost(body, form);
  };

  return (
    <>
      <form className="post__popup" id="addPost" onSubmit={sentForm}>
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
