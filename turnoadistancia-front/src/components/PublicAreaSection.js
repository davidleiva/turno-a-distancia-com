import React from 'react'; // { useEffect }
// import { Icon } from "@blueprintjs/core";
// import { IconNames } from "@blueprintjs/icons";
// import QRCode from 'qrcode'



const PublicAreaSection = () => {

    // useEffect(() => {
    //     QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
    //         if (error) console.error(error)
    //         console.log('success!');
    //     })    
    // },);

    // const QRContainer = () => (
    //     <div className="QRContainer">
    //         <canvas id="canvas"></canvas>
    //     </div>
    // );

    return (
        <div className="PublicAreaSection pb-4">
            <div
                className="container-flex  pt-4 pb-4"
                style={{
                    backgroundColor: 'white',
                    // padding: '40px 20px'
                }}
            >
                <div className="container pt-4 pb-4">
                    <div className="row pb-4">
                        <div className="col-12 mt-4 text-center">
                            <h3 className="mb-4 mt-4"><b>Ayuntamiento de Sabadell</b></h3>
                            <h3 className="mb-4 mt-4"><b>Mesa 01</b></h3>
                            <button className="btn-lg btn-primary mt-4">PEDIR TURNO</button>
                            
                            {/* <div>
                                <QRContainer />
                            </div>
                            <h4 className="col-md-6 offset-md-3">Si tu móvil es Android puedes encontrar aplicaciones para escanear tu QR <button className="btn-link bg-transparent border-0">aquí</button>.</h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PublicAreaSection;