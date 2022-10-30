import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import useCartContext from '../../context/CartHelper';
import Swal from 'sweetalert2'
import { getAllItems, createBuyOrder, getItem, updateProducto } from '../../services/firebase';


const CheckOut = () => {
    const { cart, precioTotal, clearCart } = useCartContext();

    // Estados , handlers y verificaciones para los datos del cliente

    const [nombre, setNombre] = useState('');
    const [direccion, setDir] = useState('');
    const [telefono, setPhone] = useState('');

    const handleDir = (e) => {
        setDir(e.target.value);
    };

    const handleName = (e) => {
        setNombre(e.target.value);
    };
    const handleNumber = (e) => {
        setPhone(e.target.value);
    };

    function onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
    }
    function onlyLettersAndSpaces(str) {
        return /^[A-Za-z\s]*$/.test(str);
    }

    function onlyLettersNumberAndSpaces(str) {
        return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === '' || !onlyLettersAndSpaces(nombre) || !onlyLettersNumberAndSpaces(direccion) || direccion === '' || !onlyNumbers(telefono) || telefono === '') {
            Swal.fire({
                icon: 'error',
                title: `Datos incorrectos`,
                text: 'Por favor verifique los datos ingresados.',
            })

        } else {
            handleBuy()
        }
    };


    // Compruebo STOCK de todos los items y si es correcto crea la orden de compra y descuenta stock en la DB

    const handleBuy = async () => {
        const products = await getAllItems()

        const ItemsValidated = []
        
        cart.map(item => {
            const product = products.find(product => product.id === item.id)
            const success = product.stock < item.cantidad ? false : true
            ItemsValidated.push({
                id: item.id,
                cant: item.cantidad,
                name: item.title,
                price: item.price,
                subtotal: item.price * item.cantidad,
                success
            })
            return {}
        })
        const errors = ItemsValidated.filter(item => !item.success)
        if (errors.length > 0) {
            Swal.fire({
                icon: 'error',
                title: `Sin stock`,
                text: 'No hay suficiente stock de un producto.',
            })
        }
        else {
            const buyOrder = {
                buyer: {
                    nombre: `${nombre}`,
                    telefono: `${telefono}`,
                    direccion: `${direccion}`,
                },
                items: ItemsValidated,
                total: precioTotal(),
            }
            createBuyOrder(buyOrder).then(response => {
                Swal.fire({
                    icon: 'success',
                    title: `Compra realizada con éxito id ${response}`,
                    text: 'Gracias por su compra',
                })
            })
            ItemsValidated.forEach(item => {
                getItem(item.id).then(producto => {
                    const prod = producto
                    prod.stock -= item.cant
                    updateProducto(item.id, prod)
                })
            })
            setTimeout(() => {
                clearCart();
            }, 3000);
        }
    }

    if (cart.length !== 0)
        return (
            <>
                <main>
                    <div className="carrito">
                        <table className="table table-dark table-hover mt-5 ">
                            <thead>
                                <tr className="text-primary">
                                    <th scope="col">Productos</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>{
                                cart.map((i, index) => (
                                    < tr key={i.id}>
                                        <td className="table__productos">
                                            <img src={i.image} alt="" />
                                            <h6 className="title">{i.title}</h6>
                                        </td>
                                        <td className="table__precio">{i.price}</td>
                                        <td className="table__cantidad">
                                            {i.cantidad}
                                        </td>
                                        <td className="table__subtotal">{i.price * i.cantidad}</td>
                                    </tr >))}
                            </tbody>
                        </table>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <h3 className="itemCartTotal">Total : {precioTotal()}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-2 mb-5">
                        <div className="row justify-content-center g-3">
                            <div className="col-md-6">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">Nombre</label>
                                        <input onChange={handleName} value={nombre} type="text" className="form-control" id="firstName" />
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="Direccion" className="form-label">Direccion</label>
                                        <input onChange={handleDir} value={direccion} type="text" className="form-control" id="direccion" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="phoneNumber" className="form-label">Numero Telefono</label>
                                        <input onChange={handleNumber} value={telefono} type="text" className="form-control" id="phoneNumber" placeholder="011 15487549" />
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select" id="metododepago" aria-label="Default select example">
                                            <option value={1}>Efectivo</option>
                                            <option value={2}>Tarjeta Debito</option>
                                            <option value={3}>Tarjeta Credito</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Finalizar Compra</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

            </>
        );
    else {
        return (
            <Navigate to="/category/Todos" />
        );
    }
}

export default CheckOut;
