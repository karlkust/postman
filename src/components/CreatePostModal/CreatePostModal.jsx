import React from "react";
import { Route, Routes } from "react-router-dom";

const CreatePostModal = (props) => {
  return (
    <div className={props.activeCreate ? "newPost open" : "newPost"}>
      <div className="create__modal">
        <Routes>
          <Route
            path="/create"
            element={
              <>
                <h2>Создать POST</h2>
                <form className="createPost">
                  <hr />
                  <input type="url" placeholder="URL изображения" />
                  <div className="card">
                    <img
                      src="https://avatars.mds.yandex.net/get-zen_doc/162989/pub_5d7faf4e2beb4900add612d6_5d7fafee6d29c100ac8f4ba7/scale_1200"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <input type="text" placeholder="Заголовок поста" />
                      <input type="text" placeholder="Текст поста" />
                      <input
                        type="text"
                        placeholder="введите теги через запятую"
                      />
                    </div>
                  </div>
                  <button>Создать</button>
                  <button>Отмена</button>
                </form>
              </>
            }
          />
        </Routes>
        <div
          className="modal__close"
          onClick={() => {
            props.changeActiveCreate(!props.activeCreate);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
