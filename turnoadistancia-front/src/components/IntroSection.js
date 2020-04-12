import React, { useState, useEffect, useRef } from 'react';
// import { useHistory } from "react-router-dom";

import ThreeSteps from './ThreeSteps';
import {Dialog, Classes} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import QRCode from 'qrcode'

const IntroSection = () => {
    // const history = useHistory();
    const [ workspaceName, setWorkspaceName ] = useState(null);
    const [ workspaceCode, setWorkspaceCode ] = useState(null);
    const [ workspacePhone, setWorkspacePhone ] = useState(null);
    const [ isOpenedDialog, setOpenDialog ] = useState(false);

    const canOpenDialog = () => {
        setOpenDialog(true);
    };

    const canvasRef = React.createRef();
    
    const createQR = () => {
        QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
            if (error) console.error(error)
            console.log('success!');
        }) 
    };

    const destroyQR = () => {
        console.log('destroy');
    }

    const handleClick = () => {
        setOpenDialog(true);
        setTimeout( () => {
            createQR();
        }, 1000);
    }

    useEffect(() => {
        setTimeout( () => {
             if(isOpenedDialog === true) {
                createQR();
            } else {
                destroyQR();
            }
        }, 1000);
    }, [isOpenedDialog])

    return (
        <>
        <div className="intro-section" id="Inicio-section">
            <div className="slide-1" style={{backgroundImage: "url(bckg_final.jpg)", backgroundPosition: "50%" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row align-items-center">
                            <div className="col-lg-7 mb-4">
                            <h4
                                style={{
                                    color: 'white',
                                    lineHeight: '38px',
                                    marginBottom: '20px',
                                }}
                                data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">Crea una <b className="bg-success pl-1 pr-1">lista de espera</b> automática <br/><b className="bg-success pl-1 pr-1">en whatsapp</b> para que tus clientes <br/>mantengan la <b className="bg-success pl-1 pr-1">distancia de seguridad.</b></h4>
                            <p className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{color: 'white'}}>Gestiona las listas de espera de tu establecimiento facilmente <br/>para poder evitar contagios del COVID-19.</p>
                            {/* <p data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate"><a href="#" className="btn btn-primary py-3 px-5 btn-pill">Admission Now</a></p> */}
                            </div>
                            <div className="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                            <div className="form-box">
                                <h3 className="h4 text-black mb-4">Crea una lista de espera</h3>
                                <div className="form-group">
                                    <label htmlFor="worspacename-input">Nombre de tu establecimiento</label>
                                    <input
                                        id="worspacename-input"
                                        autoComplete
                                        type="text"
                                        className="form-control"
                                        placeholder="DGT Sabadell, Ajuntament Granollers"
                                        onChange={(e) => { setWorkspaceName(e.target.value)}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="worspacecode-input">Código de whatsapp (*)</label>
                                    <small id="emailHelp" className="form-text text-muted">(*) Necesitamos una palabra que será la que inicie el bot de la lista de espera</small>
                                    <input
                                        autoComplete
                                        type="text"
                                        className="form-control"
                                        placeholder="hacerColaDGTSabadell, padrónGranollers"
                                        onChange={(e) => setWorkspaceCode(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="worspacephone-input">Número de móvil</label>
                                    <input
                                        autoComplete
                                        id="worspacephone-input"
                                        type="number"
                                        className="form-control"
                                        placeholder="Ej: 612345678"
                                        onChange={(e) => setWorkspacePhone(e.target.value)}
                                    />
                                </div>
                                {/* <div className="form-group mb-4">
                                    <input type="password" className="form-control" placeholder="Repetir Contraseña" />
                                </div> TODO: revalidate mail */}
                                <div className="form-group">
                                <button
                                    className="btn btn-primary btn-pill w-100"
                                    onClick={ () => handleClick() }
                                >
                                    Crear lista de espera
                                </button>
                                <Dialog
                                    title="Lista de Espera creada"
                                    isOpen={isOpenedDialog}
                                    onClose={() => setOpenDialog(false)}
                                >
                                    <div className={Classes.DIALOG_BODY}>
                                        <ul>
                                            <li>
                                                <p>
                                                    Acabamos de generar un <b><u>documento-cartel</u></b> con las instrucciones de uso.<br />
                                                    <b><u>Pégalo en la puerta</u></b> del establecimiento y que sea visible para los usuarios. 
                                                </p>
                                                <button className="btn-sm btn-primary mb-4">Descargar el cartel</button>
                                            </li>
                                            <li>
                                                Los usuarios de la lista de espera pueden <b>coger turno</b> escogiendo <u><b>uno</b></u> de los siguientes métodos:
                                                <ul className="list-group mt-4">
                                                    <li className="list-group-item">
                                                        A) O bien <b>escaneando este QR</b>:
                                                        <div className="QRContainer">
                                                            <canvas ref={canvasRef} id="canvas"></canvas>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p>B) O bien <b>accediendo <u>desde su móvil</u> a la web</b> <br />
                                                        <a href="#">turnoadistancia.com/EmpadronamientoGranollers.</a></p>
                                                        <ul className="list-group mt-4">
                                                        <li className="list-group-item">1 - Click en el botón, que les lleva a whatsapp, con un código por defecto</li>
                                                        <li className="list-group-item">2 - Enviar el código en la conversación para coger su turno.</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                                
                                </Dialog>
                                
                            </div>
                            </div>

                        </div>
                        
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ThreeSteps />
        </>
    );
}
 
export default IntroSection;