import React from 'react'
import './Home.css';
import Cart from './Cart';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import {useState} from 'react';

function Home() {
  const [ProductsView,setProducttasks] = useState ([
    { id: 1, 
      items: "Product : Smartphones",
      img:'./smartphone-download-png.png',
      price:"price:$4000"},

    { id: 2, 
      items: "Product : SmartWatches",
      img:'./smartwatchesss.png',
      price:"price:$4000" },

    { id: 3, 
      items: "Product : Electronics",
      img:'./electronics-38.png',
      price:"price:$4000" },

    { id: 4, 
      items: "Product : Laptops",
      img:'./laptoppng.parspng.com-4.png',
      price:"price:$4000" },

    { id: 5, 
      items: "Product : Washingmachine",
      img:'./washing087102040a95d49d.png',
      price:"price:$4000" },

    { id: 6, 
      items: "Product : Mens Wear",
      img:'./Menswears.png',
      price:"price:$4000" },

    { id: 7, 
      items: "Product : Womens Wear",
      img:'./Womenswear.png',
      price:"price:$4000" },

    { id: 8, 
      items: "Product : Earphone",
      img:'./Earphone.jpeg',
      price:"price:$4000" },

    { id: 9, 
      items: "product : Furnitures",
      img:'./Furnitures.png',
      price:"price:$4000" }
  ]);

  const [search,setSearch]=useState(""); 
  const filteredproducts = ProductsView.filter(product =>
  product.items.toLowerCase().includes(search.toLowerCase()))

  const [cart, setCart] = useState([]);
  const AddtoCart =(product) => {
  setCart([...cart,product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => (product.id !== id)))
  }


  return (
    <div className='form'>
    <div className='home1'>
    <div className='search'>
      <input type="text" className="input" placeholder="Type to Search..." value={search} onChange={(e)=>
      setSearch(e.target.value)}/>
      <button className="input1" type="submit"><AiOutlineSearch/></button>
    </div>
    <div className='products'>
      <ul className='ul'>
      {filteredproducts.map(product =>(
        <li>
          {product.product}<br/>
          <img className='image' src ={product.img}/><br/>
          {product.price}<br/>
          <button className='cart' onClick={() =>AddtoCart(product)}>add cart</button>
        </li>
      ))}      
      </ul>
    </div>
    </div>
    <Cart cart={cart} removeItem={removeItem}/>
    </div>

  )
}


export default Home

