import React from 'react';

// components
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer.js';


const ErrorPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div>Algo ha ido mal ...</div>
            <Footer />
        </React.Fragment>
    );
}
 
export default ErrorPage;