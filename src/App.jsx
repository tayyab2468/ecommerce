
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Microsoft356 from '../src/Components/Microsoft356'
function App() {
  return (
    <div className='bg-white'>
    <BrowserRouter>
     <Navbar/>
    
     <Routes>
     
     <Route path="/microsoft356" element={<Microsoft356/>} />
     
     </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
