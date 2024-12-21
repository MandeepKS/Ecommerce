
import './App.css';
import './css/styles.scss';
import IndividualProduct from './pages/IndividualProduct';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import { Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
      {/*  ---Cart provider is a context--- */}
      {/**
       * Context provides a way to pass data through the component tree,
       * without having to pass props down manually at every level.
       * 
      */}
     <CartProvider>
        <Navbar title="Ecom-Store"/>
        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="contact" element={ <Contact/>}/>
          <Route path="/product/:id" element={<IndividualProduct />} />    
          <Route path="/cart/:id" element={<Cart />} />    
          <Route path="/cart" element={<Cart />} />    
        </Routes>
        </main>
        <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
