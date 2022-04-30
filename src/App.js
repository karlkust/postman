import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import CreatePostModal from './components/CreatePostModal/CreatePostModal';
import { UserCtx } from './components/Context/UserContext';
import Main from './components/Main/Main';

function App() {

  const [user, setUser] = useState(localStorage.getItem("user") || "");

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }

  return (
    <>

    <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
      <div className='container'>
        <Header />

        <CreatePostModal />
        <Main />
        <Footer />
      </div>
      </UserCtx.Provider>
    </> 
  );
}

export default App;
