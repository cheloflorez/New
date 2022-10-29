import React from 'react';
import ItemCount from './ItemCount';
import useCartContext from '../../context/CartHelper';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    const { addToCart } = useCartContext();
    function onAdd(count) {
        const newItem = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
          }
        addToCart(newItem, count);
    }

    return (
        <>
            <div className="container bootdey mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pro-img-details">
                            <img src={item.image} alt="" className="imgdetail" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            {item.description}
                        </p>
                        <ItemCount price={item.price} onAdd={onAdd} stock={item.stock} initial={1} itemName={item.title} />
                    </div>
                </div>
            </div >
        </>
    );
}

export default ItemDetail;
