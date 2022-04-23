import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Modal from './components/Modal/Modal';
import AllPost from './components/AllPosts/AllPost';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  
  const [modalActivity, setModalActivity] = useState(false);

  

  return (
    <>
      <Header
        modalActivity={modalActivity}
        setModalActivity={setModalActivity} />
      
      <AllPost />
      <Footer />
      <SignIn
        active={modalActivity}
        changeActive={setModalActivity} />
      <SignUp 
        active={modalActivity}
        changeActive={setModalActivity} />
    </>    
  );
}

export default App;
