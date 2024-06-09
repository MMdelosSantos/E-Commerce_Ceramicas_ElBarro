import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './components/pagenotfound/PageNotFound';




function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title={"Cerámicas El Barro"} />} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer title={"Cerámicas El Barro"} />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer title={"Cerámicas El Barro"} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
