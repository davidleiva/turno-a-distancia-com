import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Login = () => {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submitLogin = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3333/api/signin',
            headers: {}, 
            data: {
                username: email,
                password: password
            }
        })
        .then(function (response) {
            localStorage.setItem('jwt', response.data.token);
            history.push("/admin")
        })
        .catch(function (error) {
            console.log(error); // TODO: error
        })
        ;
    }

    return (
        <>
        <Header
            isTransparent
            hasRegister
            hasLogin={false}
        />
        <div
            style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div
                className="LoginForm form-box"
                style={{
                    zIndex: 2,
                }}
            >
                <div
                    onSubmit={ () => submitLogin() }
                >   
                    <h4 className="h4 text-black mb-4">Accede</h4>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo Electrónico"
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-pill w-100 mb-4"
                        onClick={() => submitLogin()}
                    >Acceder</button>
                </div>
                <p>&iquest;No tienes cuenta? Vuelve al Inicio y <button
                    className="btn-link bg-transparent border-0"
                    onClick={() => history.push('/')}
                    >Regístrate</button>
                </p>
            </div>
            <div
                className="slide-1"
                style={{
                    backgroundImage: "url(bckg_final.jpg)",
                    backgroundColor: "rgb(255,255,255)",
                    backgroundPosition: "50%",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "200%",
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: 1,
                }}
            >
            </div>
        </div>
        <Footer isWhite />
        </>
    );
}
 
export default Login;
