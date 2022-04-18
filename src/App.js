import React, {useState} from 'react';
import './App.css';
import Header from './Header/Header.jsx'
import Modal from './Modal/Modal.jsx'

function App() {

  const [modalActivity, setModalActivity] = useState(false);

  return (
    <>
      <Header
        modalActivity={modalActivity}
        setModalActivity={setModalActivity} />
      <Modal
        active={modalActivity}
        changeActive={setModalActivity} />
    </>    
  );
}

export default App;
