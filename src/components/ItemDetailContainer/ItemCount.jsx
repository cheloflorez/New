import React, { useState } from 'react';
import Swal from 'sweetalert2'

const ItemCount = ({ price , onAdd, initial, itemName, stock }) => {
    const [count, setCount] = useState(initial)

    const handleAgregar = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            const Toast = Swal.mixin({
                toast: true,
                background: '#DFA822',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'No hay stock suficiente'
            })
        }

    }
    
    const handleRestar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
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
            title: `${count} ${itemName} agregada al carrito`
        })
        onAdd(count);
        setCount(initial);
    }
    return (
        <>
            <div className="row">
                <strong>
                    Price : {price}
                </strong>
                <strong>
                    Subtotal : {price * count}
                </strong>
            </div>
            <div className="d-flex justify-content-center text-center align-items-center input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={handleRestar} className="btn btn-outline-secondary">-</button>
                </div>
                <input type="text" className="form-control h-100 text-center" readOnly value={count} />
                <div className="input-group-append">
                    <button onClick={handleAgregar} className="btn btn-outline-secondary">+</button>
                </div>
                <button onClick={handleOnAdd} className="btn btn-outline-secondary m-2">Agregar al carrito</button>
            </div>

        </>
    );
}

export default ItemCount;
