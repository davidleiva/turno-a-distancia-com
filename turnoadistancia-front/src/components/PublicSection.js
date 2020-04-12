import React, { useState, useEffect, useRef } from 'react';
// import { useHistory } from "react-router-dom";

import ThreeSteps from './ThreeSteps';
import {Dialog, Classes} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// import QRCode from 'qrcode'

const PublicSection = () => {
    const workspace = 'EmpadronamientoGranollers'
    return (
        <>
        <div>
            <div className="slide-1" style={{backgroundImage: "url(bckg_final.jpg)", backgroundPosition: "50%" }} data-stellar-background-ratio="0.5">
                <div
                    className="container text-center"
                    style={{
                        paddingTop: '120px',
                    }}
                >
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 mb-4">
                            <div className="form-box">
                                <h6>Para hacer cola en <b className="text-primary">{workspace}</b> <br />pulse el botón.</h6>
                                {/* <div className="form-group">
                                    <input type="text" className="form-control" autoComplete placeholder="Introduza su número de móvil" />
                                </div> */}
                                <button
                                    className="btn btn-primary btn-pill mb-4 pl-4 mt-4 pr-4"
                                    >Coger turno</button>
                                <p style={{ color: '#444444'}}><small>Será redirigido a una conversación de whatssapp, donde simplemente tendrá que enviar como mensaje el código que le aparecerá escrito (EmpradonamientoGranollers).</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <ThreeSteps /> */}
        </>
    );
}
 
export default PublicSection;


