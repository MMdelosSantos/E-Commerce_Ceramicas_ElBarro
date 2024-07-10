import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from '/components/navbar/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './components/pagenotfound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';




function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer title={"Cerámicas El Barro"} />} />
            <Route path='/categorias/:categoryId' element={<ItemListContainer title={"Cerámicas El Barro"} />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/checkout' element={<Checkout/>} />
            
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App;
