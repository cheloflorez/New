import React from 'react';
import useCartContext from '../../context/CartHelper';
import Swal from 'sweetalert2'
import { NavLink } from "react-router-dom";

const Cart = ({ greeting }) => {
    document.title = greeting
    const { cart, precioTotal, clearCart, removeFromCart } = useCartContext();

    const handleVaciar = () => {
        const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Carrito vaciado'
        })
        clearCart();
    }

    const handleRemove = (id, title) => {
        const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: ` ${title} eliminado del carrito`
        })
        removeFromCart(id)

    }

    if (cart.length !== 0)
        return (
            <>
                <div className="carrito mb-5">
                    <table className="table table-dark table-hover mt-5">
                        <thead>
                            <tr className="text-primary">
                                <th scope="col">#</th>
                                <th scope="col">Productos</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>{
                            cart.map((i, index) => (
                                < tr key={i.id}>
                                    <th scope="row">1</th>
                                    <td className="table__productos">
                                        <img src={i.image} alt="" />
                                        <h6 className="title">{i.title}</h6>
                                    </td>
                                    <td className="table__precio">{i.price}</td>
                                    <td className="table__cantidad">
                                        {i.cantidad}
                                        <button onClick={() => handleRemove(i.id, i.title)} className="delete btn btn-danger ml-3">X</button>
                                    </td>
                                    <td className="table__subtotal">{i.price * i.cantidad}</td>
                                </tr >))}
                        </tbody>
                    </table>
                    <div className="row mt-5">
                        <div className="col">
                            <h3 className="itemCartTotal">Total : {precioTotal()}</h3>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button onClick={handleVaciar} className="btn btn-danger">Vaciar Carrito</button>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <NavLink to="/checkout">   <button className="btn btn-success">Comprar</button></NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    else

        return (
            <><h1>CARRITO VACIO</h1></>
        );

}

export default Cart;
