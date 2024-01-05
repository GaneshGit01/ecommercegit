import React, { useState } from 'react'
import './Cart.css'
import { AiOutlineShoppingCart} from "react-icons/ai";
import { MdDelete} from "react-icons/md";

function Cart( props ) {

  return (
    <div className='addcart'>
      <div className='cart1'>
      <h2>Cart</h2>
      <div className='carticon'><AiOutlineShoppingCart size='1.5rem'/></div>
      <div className='count'><h2> 0</h2></div>
      </div>
      <div className='prods'>
        <ul>
        {props.cart.map((product)=>(
          <li>
            <img className='prodimg' src={product.img} width="40px" height="40px"/>
            <p>{product.product}</p>
            {product.price}<br/>
            <button onClick={()=>{props.removeItem(product.id)}}><MdDelete size='1.5rem'/></button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Cart