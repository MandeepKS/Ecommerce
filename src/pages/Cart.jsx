import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems } = useContext(CartContext);
    const{ removeFromCart} = useContext(CartContext);
    const { updateCart } = useContext(CartContext);
    const { clearContextData } = useContext(CartContext);
    
     // Function to update the quantity of an item in the cart
     const updateAddToCart = (id,quantity) => {
        return updateCart(id,quantity);         
     };
    // Function to clear all items from the cart
    const clearAll = () => {
        localStorage.clear();        
        clearContextData();
    };     
    let discount = 0;
    return (
        <div>
                {cartItems.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">                        
                                {cartItems.map((item) => {
                                    discount = parseFloat(item.discountedPrice).toFixed(2);                                                    
                                    return (
                                    <div className="section_order" key={item.id}>
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="section_order_card">
                                                <img
                                                    className="img-fluid"
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{ width: '150px' }}
                                                />
                                                    <div className="section_order_grid">
                                                        <h5 className="d-flex justify-content-start ms-3 section_order_title">{item.title}</h5>
                                                        <div className="d-flex justify-content-start ms-3 section_order_quantity">                                             
                                                                <input
                                                                    type="number"
                                                                    value={item.quantity}
                                                                    min="1"
                                                                    max="10"
                                                                    step="1"
                                                                    style={{ width: '60px', textAlign: 'center' }}
                                                                    onChange={(el) =>updateAddToCart(
                                                                        item.id, parseInt(el.target.value, 10) //10 is the radix
                                                                    )}
                                                                />                                                       
                                                        </div>
                                                        <p className="d-flex justify-content-start ms-3 section_order_price">$ {discount}</p>
                                                    </div>   
                                                        <p className="section_order_delete"><i className="bi bi-trash3-fill" onClick={() => removeFromCart(item.id)}></i></p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                <div className="section_order_total">
                                    Total: $ {parseFloat(cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)).toFixed(2)}
                                </div>                        
                        </div>
                    </div>
                </div>
                
                ) : (
                    <div className="section_empty-cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <span><i className="bi bi-cart-x" style={{ fontSize: '10rem',color: 'rgb(144, 47, 47)' }}></i></span>
                                    <h2 className="fw-bold">Your cart is empty!</h2>
                                    <p>Looks like your cart is lonely. Pick some items to keep it company!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

             {cartItems.length > 0 && (    
                <div className="section_shipping-details">
                    <div className="container">
                        <h2 className="fw-bold">Shipping Detail</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3 mt-5">
                                    <label htmlFor="fullname" className="d-flex justify-content-start form-label fw-bold">Full name</label>
                                    <input type="text" className="form-control" id="fullname" placeholder="full name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="d-flex justify-content-start form-label fw-bold">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="d-flex justify-content-start form-label fw-bold">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Horten" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3 mt-5">
                                    <label htmlFor="phone" className="d-flex justify-content-start form-label fw-bold">Credit Card Number</label>
                                    <input type="phone" className="form-control" id="phone" placeholder="1234 5678 9101 1121" />
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <label htmlFor="expiryDate" className="d-flex justify-content-start form-label fw-bold">Expiry Date</label>
                                        <div className="input-group">
                                        <input type="date" className="form-control" id="expiryDate" placeholder="dd/mm/yyyy" />                
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="cvv" className="d-flex justify-content-start form-label fw-bold">CVV</label>
                                        <div className="input-group">
                                        <input type="number"  max="999" className="form-control" id="cvv" placeholder="123"/>        
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mt-5">
                                    <Link to="/success" className="cta-button-white"  onClick={clearAll}>Pay $ {parseFloat(cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)).toFixed(2)}</Link>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Cart;
