import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggle() {
    setIsDarkMode(prev => !prev)
  }
  return (
    <div className="container">
       <Navbar 
          toggleDarkMode={toggle} 
          darkMode={isDarkMode} />
       <Main darkMode={isDarkMode}  />
    </div>
  );
}

export default App;
