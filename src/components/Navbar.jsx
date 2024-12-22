import { Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
 function Navbar(props) {
    const { getTotalQuantity } = useContext(CartContext);
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/"> <i className="bi bi-house fs-4"></i> Home</Link>
                        </li>                  
                        <li className="nav-item">
                            <Link className="nav-link"  to="/contact"><i className="bi bi-telephone fs-4"></i> Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/cart">   <i className="bi bi-cart fs-4"></i><span className="translate-middle badge rounded-pill bg-danger"> {getTotalQuantity()}<span className="visually-hidden">unread messages</span></span></Link>
                        </li>
                    </ul>                    
                    </div>
                </div>
            </nav>
        </header>
  
  );
}

export default Navbar;