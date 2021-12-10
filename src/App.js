import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a mi aplicación en React!
        </p>
        <a
          className="App-link"
          href="https://github.com/fabiancitonline/react-bariandaran"
          target="_blank"
          rel="noopener noreferrer"
        >
BARIANDARAN-REACT</a>
<br/>
<Card />
      </header>
    </div>
  );
}

export default App;
