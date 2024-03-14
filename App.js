import React, {useState} from 'react'
import './App.css';
import Banner from './Pages/Banner';
import Header from './Pages/Header';

function App() {
  const [toggleMenu, setToggleMenu] = useState (false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
    <Header handleToggleMenu={handleToggleMenu} toggleMenu={toggleMenu}/>
    <Banner toggleMenu={toggleMenu}/>
    </>
  );
}

export default App;
