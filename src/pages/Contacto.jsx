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
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.7473422443904!2d-60.715613984308874!3d-31.585975711637033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5070f71e30c7f%3A0x510f44df7ebec165!2sAv.%20Jos%C3%A9%20Gorriti%204387%2C%20S3006%20DMC%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1654648061222!5m2!1ses-419!2sar"  width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            <p>Argentina</p>
                            <p>+1 11110000000</p>
                            <p>contacto@burger.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contacto;
