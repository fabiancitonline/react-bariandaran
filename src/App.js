import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import ItemListContainer from './components/ItemListContainer.js';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Bienvenidos a mi aplicación en React!
        </p>
</header>
<body>
  <ItemListContainer></ItemListContainer>
</body>
</div>
  );
}

export default App;
