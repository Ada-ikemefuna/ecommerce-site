import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
// import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {CartState} from '../context/Context'


const Header = () => {
    const {cart} = useContext(CartState);
  return (
   <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
       <Container>
           <Navbar.Brand>
               <Link to="/">Store</Link>
           </Navbar.Brand>
           <Navbar.Brand>
               <Link to="/login">Log in</Link>
           </Navbar.Brand>
           
           <Navbar.Brand>
               <Link to="/cart">Cart({cart.length})</Link>
           </Navbar.Brand>
           {/* <Nav>
            <Dropdown>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart style={{fontSize: "25px"}}/>
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: "370px"}}>
                        <span style={{padding: "10px"}}>Cart is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
           </Nav> */}
       </Container>
   </Navbar>
  )
}

export default Header;