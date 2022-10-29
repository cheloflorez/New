import React from 'react';
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    const setStock = (item , id) => {
        if (item > 0) { return <Link to={`/item/${id}`}> <button className='btn btn-primary'>Agregar</button></Link> }
        else { return  <button className='btn btn-danger'>SIN STOCK</button>}
    }
    return (
        <>
            {items.map((value) => {
                return (
                    <div className="col" key={value.id}>
                        <div className="card h-100">
                            <img src={value.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                            </div>
                            <div className="card-footer text-center">
                                <h5 className="text-primary">Precio : <span className="precio"> {value.price} </span></h5>
                                <h5 className="text-primary">Stock : <span className="stock"> {value.stock} </span></h5>
                                {setStock(value.stock , value.id)}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ItemList;
