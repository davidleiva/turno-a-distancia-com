import React from 'react';
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";



const AdminSection = () => {

    const AreaRow = ({areaName, currentNumber}) => (
        <li className="list-group-item">
            <div className="d-flex justify-content-between mb-2">
                <h5>{areaName}</h5><button className="btn-sm btn-secondary ml-4 admin-btn">Editar área</button>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <b>Número Actual:<span className="ml-2">{currentNumber}</span></b>
                <button className="btn-sm btn-primary ml-4 admin-btn">+ Avanzar uno</button>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <a className="admin-btn btn btn-outline-primary" href="/poster">Editar Póster</a>
                <a className="admin-btn btn btn-outline-primary" href="/qr">Editar QR</a>
            </div>
        </li>
    );

    const MemberRow = ({memberName, areasList}) => (
        <li className="list-group-item">
            <div className="d-flex justify-content-between mb-2">
                <h5>
                    <Icon icon={IconNames.USER} iconSize={24} color={'#777777'}/>
                    <span className="ml-2">{memberName}</span>
                </h5>
                <button className="btn-sm btn-secondary ml-4 admin-btn">Editar persona</button>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <b>Áreas que gestiona:<span className="ml-2">{areasList}</span></b>
                <button className="btn-sm btn-primary ml-4 admin-btn">Editar Áreas</button>
            </div>
        </li>
    );

    return (
        <div className="AdminSection pb-4">
            <div
                className="container-flex"
                style={{
                    backgroundColor: 'white',
                    // padding: '40px 20px'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <h3 className="mb-4 mt-4">¡Hola, <b>Ayuntamiento de Sabadell!</b></h3>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="row">
                        <div className="col-12 col-md-6 AdminSection__Section">
                            <div className="d-flex">
                                <h4
                                    className="d-flex secondary-color justify-content-between w-100"
                                >
                                    <div>
                                        <Icon icon={IconNames.PANEL_TABLE} iconSize={40} color={'#777777'}/>
                                        <b className="ml-4">Áreas (*)</b>
                                    </div>
                                    
                                    <button
                                        className="btn-outline-primary btn-sm"
                                    >
                                        <Icon icon={IconNames.PLUS} iconSize={20} color={'#25d366'}/>
                                        <span className="ml-2">Añadir Área</span>
                                    </button>
                                </h4>
                            </div>
                            <p><small>(*) Las áreas son zonas donde normalmente encotraríamos una cola en sus establecimiento. ("Acceso al recinto", "Mesa 1", "Pago parking", "Carnicería" ...)</small></p>
                            <ul className="list-group">
                                <AreaRow
                                    areaName={'Mesa 01'}
                                    currentNumber={'03'}
                                />
                                <AreaRow
                                    areaName={'Mesa 02'}
                                    currentNumber={'5A'}
                                />
                                <AreaRow
                                    areaName={'Mesa 03'}
                                    currentNumber={'7B'}
                                />
                                <AreaRow
                                    areaName={'Empadronamiento'}
                                    currentNumber={'28'}
                                />
                            </ul>   
                        </div>
                        <div className="col-12 col-md-6 AdminSection__Section">
                            <div className="d-flex">                      
                                <h4 className="secondary-color d-flex justify-content-between w-100">
                                    <div>
                                        <Icon icon={IconNames.USER} iconSize={40} color={'#777777'}/>
                                        <b className="ml-4">Miembros (*)</b>
                                    </div>
                                    <button
                                    className="btn-outline-primary btn-sm"
                                    >
                                    <Icon icon={IconNames.PLUS} iconSize={20} color={'#25d366'}/>
                                    <span className="ml-2">Añadir Persona</span>
                                </button>
                                </h4>
                            </div>
                            <p style={{ height: '58px' }}><small>(*) Las personas que pueden Editar estas colas, y qué permisos tienen</small></p>
                            <ul className="list-group">
                                <MemberRow
                                    memberName={'María López'}
                                    areasList={'Mesa 01'}
                                />
                                <MemberRow
                                    memberName={'Ferràn Bosch'}
                                    areasList={'Mesa 02, Mesa 03'}
                                />
                                <MemberRow
                                    memberName={'Andoni Goikoetxea'}
                                    areasList={'Empadronamiento'}
                                />
                                <MemberRow
                                    memberName={'Ilaria Scuotto'}
                                    areasList={'Mesa 02, Empadronamiento'}
                                />
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminSection;