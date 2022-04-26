import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Modal from './components/Modal/Modal';
import AllPost from './components/AllPosts/AllPost';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import CreatePostModal from './components/CreatePostModal/CreatePostModal';

function App() {
  
  const [modalActivity, setModalActivity] = useState(false);
  const [modalActivityIn, setModalActivityIn] = useState(false);
  

  return (
    <>
      <Header
        modalActivity={modalActivity}
        setModalActivity={setModalActivity} 
        
        modalActivityIn={modalActivityIn}
        setModalActivityIn={setModalActivityIn} 
        
        />
      <CreatePostModal />
      <AllPost />


      <SignIn
        activeIn={modalActivityIn}
        changeActiveIn={setModalActivityIn} />
      <SignUp 
        active={modalActivity}
        changeActive={setModalActivity} />
      <Footer />
    </>    
  );
}

export default App;
