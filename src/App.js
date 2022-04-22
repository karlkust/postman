import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
// import Post from './Post/Post';
// import Posts from './Posts/Posts';
import AllPost from './components/AllPosts/AllPost';
function App() {
  
  const [modalActivity, setModalActivity] = useState(false);

  

  return (
    <>
      <Header
        modalActivity={modalActivity}
        setModalActivity={setModalActivity} />
      
      <AllPost />
      
      <Modal
        active={modalActivity}
        changeActive={setModalActivity} />
    </>    
  );
}

export default App;
