import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';

function App() {
  const personas = [
    {name: 'Fabian', age: '23'},
    {name: 'Maria', age: '21'},
    {name: 'Juan', age: '30'},
  ];
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Bienvenidos a mi aplicación en React!
        </p>
<br/>
{ personas.map(persona => <Card key={persona.name} name={persona.name} age={persona.age} />) }
</header>
</div>
  );
}

export default App;
