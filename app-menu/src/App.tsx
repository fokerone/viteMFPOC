import { useState } from 'react';
import './App.css'; 

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = () => {
    setMenuVisible(false); 
  };

  return (
    <div className="App">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ 
      </button>
      {menuVisible && (
        <div className="menu">
          <h2>APP-MENU</h2>
          <ul>
            <li onClick={handleMenuClick}>Home</li>
            <li onClick={handleMenuClick}>MicroOne</li>
            <li onClick={handleMenuClick}>MicroDos</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
