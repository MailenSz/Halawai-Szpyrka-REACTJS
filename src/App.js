import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HALAWAI BAR and GRILL
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
