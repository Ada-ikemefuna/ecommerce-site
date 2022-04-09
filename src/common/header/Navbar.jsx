import { Link } from 'react-router-dom';

import { useState } from "react";


const Navbar = () => {
    const [ mobileMenu, setMobileMenu ] = useState(false);

    const changeMenu = () =>{
        setMobileMenu(!mobileMenu);
    }

    return ( 
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fa fa-th-large"></span>
                        <h4>Categories <i className="fa fa-caret-down"></i></h4>
                    </div>

                    <div className="nav_link">
                        <ul className={mobileMenu? "nav_links_mobileMenu" : "link f_flex capitalize"} onClick= {() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>Pages</Link>
                            </li>
                            <li>
                                <Link to='/user account'>User Account</Link>
                            </li>
                            <li>
                                <Link to='/vendor account'>Vendor account</Link>
                            </li>
                            <li>
                                <Link to='/track my order'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        <button className="toggle" onClick={changeMenu}>
                            {
                                mobileMenu? <i className="fas fa-times close home-btn"></i> : 
                                <i className="fa fa-bars open"></i>
                                // <i className="fa fa-times open" ></i>
                                
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Navbar;