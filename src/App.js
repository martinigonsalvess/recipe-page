import React from 'react';
import './App.css';
import Burger from './pages/Burger';
import Navbar from './pages/NavBar';
import RecipePage from './pages/RecipePage';

function App() {
  
  
  return (
    <div className="App">
       {/* <Navbar />  */}
     <RecipePage />
     <Burger />
    </div>
  );
}

export default App;
