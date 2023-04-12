import './App.css';
import './components/ItemCount/ItemCount.css'
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/itemListContainer/itemListContainer';
import NavBar from './components/navbar/Navbar';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <ItemList greeting={"Bienvenidos!! (•◡•) /"}/>
    </div>
  );
}

export default App;
