import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllItems, getItemsByCategory } from '../../services/firebase'
import LoadingSpinner from '../LoadingSpinner/Spinner';
import ItemList from "./ItemList";

const Productos = ({ greeting }) => {
  const { categoryid } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)

    if (categoryid === "Todos") {
      document.title = greeting + " Todos los productos"
      getAllItems().then(respuestaPromise => {
        setProductos(respuestaPromise);
      });
    }
    else {
      document.title = greeting + categoryid
      getItemsByCategory(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
      });
    }
  }, [greeting, categoryid]);

  if (loading) {
    return <section className="p-5 text-center">
      <LoadingSpinner />
    </section>
  }

  return (
    <>
      <div className="row ">
        <div className="col">
          <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 m-3">
            <ItemList items={productos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
