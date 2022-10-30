import React from 'react';

const Contacto = ({ greeting }) => {
    document.title = greeting
    return (
        <>
            <main>
                <div className="container mt-5 mb-5">
                    <h1 className="text-center mb-5">Queremos saber tu opinion.</h1>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="firstName" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="lastName" required />
                                </div>
                                <div className="col-md-8">
                                    <label htmlFor="emailInfo" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="emailInfo" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="phoneNumber" className="form-label">Numero Telefono</label>
                                    <input type="text" className="form-control" id="phoneNumber" placeholder="011 15487549" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="comments" className="form-label">Comentario</label>
                                    <textarea className="form-control" id="comments" rows={3} required defaultValue={""} />
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contacto;
