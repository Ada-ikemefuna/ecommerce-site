import React, { useContext } from 'react';
import './styles.css';
import {CartState} from '../context/Context'

const SingleProduct = ({prod}) => {
  const {cart, setCart} = useContext(CartState);

  
  return (
    <div className='products'>
        <img src={prod.image} alt="random pic" />
        <div className="productdesc">
            <span style={{fontWeight: 700}}>{prod.name}</span>
            <span>$ {prod.price.substring(0, 3)}</span>
        </div>
        {cart.includes(prod) ? (
        <button 
            className="add"
            onClick={() => 
            setCart(cart.filter(c => c.id !== prod.id))}
          >
            Remove From Cart
        </button>)
      : (
        <button 
            className="add"
            onClick={() => 
            setCart([...cart, prod])}
          >
            Add To Cart
        </button>
      )}    
        
        
    </div>
  )
}

export default SingleProduct;