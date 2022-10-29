import React, { createContext } from "react";
import { useContext, useState, useEffect } from 'react';


const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartHelper({ children }) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);


    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    const copyItem = { ...cartItem };
                    copyItem.cantidad += cantidad;
                    return copyItem;
                }
                else
                    return cartItem;

            })
            setCart(newCart);
        }
        else {
            const newItem = { ...item, cantidad };
            setCart([...cart, newItem]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const precioTotal = () => {
        let total = 0;
        cart.map((i) => total += i.price * i.cantidad);
        return total;
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter(item => {
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const itemsTotal = ()=> {
        let cantidad = 0;
        cart.map(i => cantidad += i.cantidad);
        return cantidad;
      }


    return (
        <Provider value={{ itemsTotal, removeFromCart, addToCart, cart, precioTotal, clearCart }}>
            {children}
        </Provider>
    );
}

export default useCartContext;
