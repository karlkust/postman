import React, { useState} from 'react';
import './App.css';
import Header from './Header/Header.jsx'
import Modal from './Modal/Modal.jsx'
// import Post from './Post/Post';
// import Posts from './Posts/Posts';
import AllPost
 from './AllPosts/AllPost';
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
