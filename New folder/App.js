import "./App.css"
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/product" element={<Product/>}/>

        <Route path="about" element={<About/>}/>

        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

