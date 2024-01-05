import React from 'react'
import './Details.css'
import { TbCurrentLocation } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";
import { PiShareNetwork } from "react-icons/pi";
// import { IoStar } from "react-icons/io5";
// import StarRatings  from 'react-star-ratings';

function Details(props) {

  return (
    <div className='details'>
        <div className='de_detail'>
        <div className='de_content'>
        <ul>
            {props.detail.map((product)=>(
            <li>
            <div className='de_close' onClick={()=> {props.close(false);props.handledelete(product.id)}}>&times;</div>
            <div className='de_title'>
            <p className='p'><TbCurrentLocation  className='loc'/>Add delivery location to get extra discount </p>
         
            </div>
            <img className='prodimge' src={product.image} width="130px" height="130px"/>
            <h4 className='de_prod'>
            {product.product}
            </h4>
            <div className='pricee'>
              
          <p className='price1'>{product.name} <br/>${product.price}</p>
          <h7 className='offf'>Offer  price: ${product.offer}</h7>
          <br/>
          </div>
            <br/>
            {/* <IoMdHeart className='de_heart' /><PiShareNetwork  className='share'/> */}

            <h5 className='de_special'>{product.special}</h5><br/>
            <h5 className='deliv'>Free Delivery</h5><br/>
            {/* <button className='button'>{product.rating }<IoStar className='star'/></button> */}

            
      
{/* 
            <div class="rating">
            <StarRatings
            rating={product.rating}
            starRatedColor="#2A2B31"
            numberOfStars={5}
           starDimension="20px"
           starSpacing="2px"
            />
            </div><br/> */}
            <p className='de_details'>Highlights : {product.details}</p>
            <div className='de_footer'>
            {/* <button className='btn' onClick={()=> {props.close(false);props.handledelete(product.id);props.addToCart(product);props.plusQty()}}>Add Cart</button> */}
            <button className='btn' onClick={()=> {props.close(false);props.handledelete(product.id)}}>close</button>
            </div>
            </li>
            ))}
        </ul>    
        </div>
        </div>
    </div>
  )
}

export default Details

// onClick={()=>{props.removeItem(product.id)}