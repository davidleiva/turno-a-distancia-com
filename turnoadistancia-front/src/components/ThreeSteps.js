import React from 'react';

const ThreeSteps = () => {

    const pasos = [
        {
            imgURL: 'https://www.otize.com/wp-content/uploads/2019/09/logo-whatsapp.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices luctus ligula, at gravida quam luctus in. Nullam suscipit, neque at pellentesque convallis, risus dui lacinia augue, vel convallis augue augue viverra diam. Fusce sed purus est. Maecenas sed tortor mi. Praesent blandit ac nisl id viverra. Quisque ut laoreet tortor. Vivamus ac nulla urna. Nullam et ornare leo.'
        },
        {
            imgURL: '   ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices luctus ligula, at gravida quam luctus in. Nullam suscipit, neque at pellentesque convallis, risus dui lacinia augue, vel convallis augue augue viverra diam. Fusce sed purus est. Maecenas sed tortor mi. Praesent blandit ac nisl id viverra. Quisque ut laoreet tortor. Vivamus ac nulla urna. Nullam et ornare leo.'
        },
        {
            imgURL: 'https://www.otize.com/wp-content/uploads/2019/09/logo-whatsapp.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices luctus ligula, at gravida quam luctus in. Nullam suscipit, neque at pellentesque convallis, risus dui lacinia augue, vel convallis augue augue viverra diam. Fusce sed purus est. Maecenas sed tortor mi. Praesent blandit ac nisl id viverra. Quisque ut laoreet tortor. Vivamus ac nulla urna. Nullam et ornare leo.'
        },
    ];

    const pasosMapped = pasos.map((paso, index) => 
        <div className="col-12 col-lg-4 d-flex">
            <div className="ThreeSteps__IMGContainer d-flex align-items-center justify-content-center">
                <img src="https://www.otize.com/wp-content/uploads/2019/09/logo-whatsapp.jpg" alt={`Paso-${index}`} />
            </div>
            <p>{paso.text}</p>
        </div>
    );

    return (
        <div className="ThreeSteps">
            <div className="container">
                <div className="row">
                    {pasosMapped}
                </div>
            </div>
        </div>
    );
        
}
 
export default ThreeSteps;