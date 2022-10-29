import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import CheckOut from "./components/CheckOut/CheckOut"
import Cart from "./components/Cart/Cart";
import { CartHelper } from "./context/CartHelper"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CartHelper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home  greeting="Bienvenidos - BURGer "/>} />
              <Route path="/nosotros" element={<Nosotros greeting="Conocenos"/>} />
              <Route path="/contacto" element={<Contacto  greeting="Contactanos"/>} />
              <Route path="/login" element={<Login  greeting="Login"/>} />
              <Route path="/cart" element={<Cart greeting="Carrito de compra" />} />
              <Route path="/category/:categoryid" element={<ItemListContainer greeting="Menu - " />} />
              <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto - " />} />
              <Route path="/checkout" element={<CheckOut greeting="Finalize su compra " />} />
              <Route path="*" element={<h1>NO ENCONTRADO</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </CartHelper>
    </>
  );
};

export default App;
