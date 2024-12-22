import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    // Load cart data from localStorage on app load
    useEffect(() => {
    const storedCart = localStorage.getItem('cart');
        if (storedCart) {
        setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            if (existingItem) {
                // Update quantity for existing item
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity}
                        : item
                );
            } else {
                // Add new item to cart
                return [...prev, product];
            }
        });
    };
    // Update item quantity in cart
    const updateCart = (productId, quantity) => {
        setCartItems((prev) => {
            return prev.map((item) =>
                item.id === productId
                    ? { ...item, quantity: quantity }
                    : item
            );
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));       
    };
    // Clear all cart data
    const clearContextData = () => {
        setCartItems([]);
    };
    // Calculate total quantity of items for navbar badge 
    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        // Pass down the cart data and all methods
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalQuantity,updateCart, clearContextData }}>
            {children}
        </CartContext.Provider>
    );
};