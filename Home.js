import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete} from "react-icons/md";
import Details from './Details';
import './Home.css';

const products = [
  { id: 1, name: 'Iphone 14 pro', 
  price: '90,000',
  offer: 120000,
  details: "128 GB ROM || 15.49 cm (6.1 inch) || Super Retina XDR Display || 12MP + 12MP | 12MP Front Camera || A15 Bionic Chip, 6 Core Processor Processor", 
  image: './iphone_14_PNG24.png'},

  { id: 2, name: 'SmartWatches', 
  price: 4000, 
  image: './smartwatchesss.png'},

  { id: 3, name: 'Electronics', 
  price: 8000, 
  image: './electronics-38.png'},

  { id: 4, name: 'Laptops', 
  price: 45000, 
  image: './laptoppng.parspng.com-4.png'},

  { id: 5, name: 'Washingmachine', 
  price: 40000, 
  image: './washing087102040a95d49d.png'},

  { id: 6, name: 'Mens Wear', 
  price: 2000, 
  image: './Menswears.png'},

  { id: 7, name: 'Earphone', 
  price: 1000, 
  image: './Earphone.jpeg'},

  { id: 8, name: 'Furnitures', 
  price: 18000, 
  image: './Furnitures.png' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }

    updateTotal();
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    updateTotal();
  };

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    updateTotal();
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    updateTotal();
  };


  const [showdetail,setShowItems] = useState(false);

  const [detail ,setDetail] = useState([]);
  
  const handledelete = (id) => {
    setDetail(detail.filter((product) => (product.id !== id)))
  }
  
  const Itemsdetail = (product) =>
  {
    setDetail([...detail,product])
  }
 

  return (
    <div className="form">
      <div className='home1'>
      <div className="search">          
          <input type="text" 
          className="input" 
          placeholder="Type to Search..." 
          value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)}/>  
          <button className='searchbar'><AiOutlineSearch/></button>
      </div>

      <div className="products">
        <ul className='list'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <img className='image' src={product.image} alt={product.name}/>
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <button className='cart' onClick={() => addToCart(product)}>Add to Cart</button>
              <button className='cart' onClick={() =>{setShowItems(true);Itemsdetail(product)}}>View </button>
            </li>
          ))}
        </ul>
      </div>
      </div>

      <div className="addcart">
      <div className='addcart1'>
      <h2>Cart</h2>
      <div className='cart-icon'><AiOutlineShoppingCart size='1.5rem'/></div>
       <div className='count'><input type="text" className='count1'/></div>
      </div>
      <div className='prods-items'>  
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img className='prodimg1' src={item.image} alt={item.name} />
              <div>
                {/* <p>{item.name}</p> */}
                <p>{item.price} <br/> Qty: {item.quantity}</p>
              </div>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}><MdDelete size='1.5rem'/></button>
            </li>
          ))}
        </ul>
        </div>
        <p>Total: ${total}</p>
        {showdetail && (
    <Details
    detail={detail}
    handledelete={handledelete}
    close={setShowItems}/>
    )}
      </div>
    </div>
  );
};

export default App;
