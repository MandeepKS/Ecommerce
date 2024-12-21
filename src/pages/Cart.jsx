import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="container">
            {cartItems.length > 0 ? (
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            {cartItems.map((item) => (
                                <div className="col-md-6" key={item.id}>
                                    <div className="row">
                                    <div className="col-md-12">
                                            <img
                                                className="img-fluid mt-5"
                                                src={item.image}
                                                alt={item.title}
                                                style={{ width: '150px' }}
                                            />
                                            <h5 className="d-flex justify-content-start ms-5 mt-5">{item.title}</h5>
                                            <div className="d-flex justify-content-start ms-5">
                                                Quantity:
                                                <span className="d-flex align-items-center">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        min="1"
                                                        max="10"
                                                        step="1"
                                                        style={{ width: '60px', textAlign: 'center' }}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-5">
                            <label for="fullname" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="full name" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="phone" className="form-control" id="phone" placeholder="+47 4111122" />
                        </div>
                        <div className="mb-3">
                            <label for="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Horten" />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
