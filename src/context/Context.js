import React, {createContext, useState } from 'react';

export const CartState = createContext();



const Context= ({children}) => {
   const [cart, setCart] = useState([]);
    return <CartState.Provider value={{cart, setCart}}>
        {children}
    </CartState.Provider>
};

export default Context;

// export const CartState = () => {
//     return useContext(createContext);
// }