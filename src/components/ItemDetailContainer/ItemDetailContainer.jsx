import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/firebase'
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = ({ greeting }) => {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    
    useEffect(() => {
        getItem(itemid).then(respuestaPromise => {
            setProducto(respuestaPromise);
            document.title = greeting + respuestaPromise.title
        });
    }, [itemid , greeting]);

    return (
        <>
        <ItemDetail item={producto}/>
        </>
    );
}

export default ItemDetailContainer;
