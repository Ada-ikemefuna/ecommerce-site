import { Link } from 'react-router-dom';

const Search = () => {
    window.addEventListener("scroll", function(){
        const search = document.querySelector('.search')
        search.classList.toggle("active", window.scrollY > 100)
    });

    return ( 
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img src='' alt="" />
                    </div>

                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Enter and hit send..." />
                        <span>All Category</span>
                    </div>

                    <div className="icon f_flex width">
                        <i className="fa fa-user icon-circle"></i>
                        <div className="cart">
                            <span>0</span>
                            <Link to="">
                                <i className="fa fa-shopping-bag icon-circle"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Search;