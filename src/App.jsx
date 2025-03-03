import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/store';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Products';
import Productdetails from './Components/Productdetails';
import Checkout from './Components/Checkout';
import Addtocart from './Components/Addtocart';

function App() {
  return (
    <Provider store={store}> {/* Wrap everything in Provider */}
      <div className='bg-white'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:name" element={<Productdetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Addtocart" element={<Addtocart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
