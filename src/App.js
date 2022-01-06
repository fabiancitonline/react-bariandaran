import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import { useState } from 'react';

function App() {
  const personas = [
    {name: 'Fabian', age: '23'},
    {name: 'Maria', age: '21'},
    {name: 'Juan', age: '30'},
  ];
  const [contar, setContar] = useState(1);
  let stock = 5

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Bienvenidos a mi aplicación en React!
        </p>
</header>
<body>
{ personas.map(persona => <Card key={persona.name} name={persona.name} age={persona.age} />) }
<br />
<p>
  <h2>Items a llevar (stock: {stock} unidades)</h2>
<button onClick={() => setContar( contar <= 1 ? contar : contar -1)}>-</button>
<label>{contar}</label>
<button onClick={() => setContar(contar >= 5 ? contar : contar + 1)}>+</button>
</p>
</body>
</div>
  );
}

export default App;
