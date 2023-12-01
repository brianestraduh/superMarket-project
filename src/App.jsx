import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import ProductDetails from './ProductDetails.jsx';
import ProductDetailInfo from './ProductDetailInfo.jsx';
import ProductDetailNutrition from './ProductDetailNutrition.jsx';
import ProductDetailStorage from './ProductDetailStorage.jsx';
import {store} from "./store.js"

function App() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/products" element={<Products />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="" element={<ProductDetailInfo />}></Route>
              <Route path="nutrition" element={<ProductDetailNutrition />}></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }

export default App