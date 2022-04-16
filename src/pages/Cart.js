import React from 'react';
import SingleProduct from '../components/SingleProduct';
import { useState, useEffect, useContext } from 'react';
import {CartState} from '../context/Context';

const Cart = () => {
  const [total, setTotal] = useState();

  const {cart, setCart} = useContext(CartState);

  

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])
  
  return (
    <div>
      <span style={{fontSize: 30}}>My Cart</span>
      <br/>
      <span style={{fontSize: 30}}>Total: $ {total}</span>
      <div className="productContainer">
        {cart.map(prod => (
       <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
        ))}
        </div>
    </div>
  )
}

export default Cart