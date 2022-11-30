import logo from './logo.svg';
import './App.css';
import './Components/Title';
import './Components/Initial';
import './Components/NavBar';
import './Components/List';
import './Components/Layout';
import './Components/ItemListContainer/ItemListContainer';
import './Components/CartWidget';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Initial />
        <NavBar />
        <ItemListContainer />
        <CartWidget />
        <List />
        <Layout />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          HALAWAI BAR and GRILL
        </h2>
      </header>
    </div>
  );
}

export default App;
