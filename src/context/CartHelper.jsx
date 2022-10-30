import React, { createContext } from "react";
import { useContext, useState, useEffect } from 'react';


const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartHelper({ children }) {

    // Uso LocalStorage para no perder el carrito si actualizo la pagina

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    
    // Agrego items al carrito y verifico si ya no esta.
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
    
    // Retorno el total del carrito
    const precioTotal = () => {
        let total = 0;
        cart.map((i) => total += i.price * i.cantidad);
        return total;
    }
    
    // Vacio el carrito
    const clearCart = () => {
        setCart([]);
    }
    
    // Elimino un item del carrito
    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter(item => {
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    // Retorno la cantidad de items del carrito
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
