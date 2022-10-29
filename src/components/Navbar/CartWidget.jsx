import React from 'react';
import './Cart.css';
import useCartContext from '../../context/CartHelper';
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { itemsTotal } = useCartContext();
  if (itemsTotal() === 0) {
    return <>
    </>
  } else {
    return (
      <><NavLink to="/cart" className="nav-link">
        <div>
          <div className="mostrar-cantidad">{itemsTotal()}
          </div>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/burger-b321b.appspot.com/o/img%2Fcart.jpeg?alt=media&token=8faf7a3a-5c8f-471d-96bf-75b14146a615"
              className="nav-link"
              height="70px"
              width="70px"
              href="#"
              alt="Imagen de carrito"
            />
          </div>
        </div>
      </NavLink>
      </>
    );
  }
}

export default CartWidget;
