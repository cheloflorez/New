import React from 'react';

const Login = ({ greeting }) => {
    document.title = greeting
    return (
        <>
            <main>
                <div className="container mt-5 mb-5 ">
                    <h1 className="text-center">Ingresa a nuestra pagina.</h1>
                    <div className="row justify-content-center align-items-center">
                        <form className="col-md-4">
                            <div className="col-md-12 text-center">
                                <label htmlFor="userName" className="form-label">Usuario</label>
                                <input type="text" className="form-control" id="userName" required />
                            </div>
                            <div className="col-md-12 text-center mt-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <div className="col-md-12 text-center p-3">
                                <button type="submit" className="btn btn-primary">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Login;
