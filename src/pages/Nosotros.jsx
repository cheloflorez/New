import React from 'react';

const Nosotros = ({ greeting }) => {
    document.title = greeting
    return (
        <>
            <main className="container">
                <div className="row m-5">
                    <div className="col-md-8 ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/burger-b321b.appspot.com/o/img%2Fhamburguesas.jpg?alt=media&token=86c5aaad-6afe-47f7-b728-48fad2f4e328" className="img-fluid" alt="Nuestro equipo preparando hamburguesas" />
                    </div>
                    <div className="col-md-4">
                        <h1>Conoce nuestros Chefs</h1>
                        <p>Nuestro apasionado equipo culinario está formado por profesionales innovadores y experimentados con
                            años de experiencia en el servicio de alimentos. Su trabajo combina la ciencia alimentaria, la
                            tecnología y las artes culinarias para imaginar el futuro de la comida. Se basan en las tendencias
                            actuales y los conocimientos culinarios de nuestra red global para crear soluciones personalizadas
                            para todos nuestros clientes. Mediante una investigación de sabores propietaria, nuestro equipo de
                            chefs con visión de futuro tiene como objetivo guiar la siguiente fase del servicio de alimentos.
                            Individualmente, se han ganado elogios en toda la industria, ¡pero juntos están creando el futuro
                            del sabor!
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Nosotros;
