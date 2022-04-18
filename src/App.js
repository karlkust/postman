import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header/Header.jsx'
import Modal from './Modal/Modal.jsx'
// import Post from './Post/Post';
import api from './Api';
import { Routes, Route } from 'react-router-dom';
// import Posts from './Posts/Posts';
import Page from './Pages/AllPosts';

function App() {

  const [data, setData] = useState([]);
  const [goods, setGoods] = useState(data)
  const [modalActivity, setModalActivity] = useState(false);

  useEffect(() => {
    api.getPostList().then(ans => {
      setData(ans.posts);
      setGoods(ans.posts);
    })
  })

  return (
    <>
      <Header
        modalActivity={modalActivity}
        setModalActivity={setModalActivity} />
      <main>
        <Routes>
          <Route path='/posts' element={<Page name='Все посты' goods={goods} />} />
        </Routes>
      </main>
      <Modal
        active={modalActivity}
        changeActive={setModalActivity} />
    </>    
  );
}

export default App;
