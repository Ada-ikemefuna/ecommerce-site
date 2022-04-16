
import  faker  from '@faker-js/faker';
import React, { useState, useContext } from 'react';
import SingleProduct from '../components/SingleProduct';
import {CartState} from '../context/Context'

faker.seed(100);

const Home = () => {
  const {cart, setCart} = useContext(CartState);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 3, 4, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));


  const [products] = useState(productsArray);

 console.log(cart)

  
  
  return (
    <div className='productContainer'>
        {products.map((prod) => (

         <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
        ))
      }
    </div>
  )
}

export default Home;