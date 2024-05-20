import './App.css';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer title='Bienvenidos a la Tienda Cerámicas El Barro'/>
    </div>
  )
}

export default App;
