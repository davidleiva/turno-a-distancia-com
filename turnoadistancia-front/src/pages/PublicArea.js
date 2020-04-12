import React from 'react';
// components
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import PublicAreaSection from'../components/PublicAreaSection';

const PublicArea = () => {
    return (
        <React.Fragment>
            <Header
                hasLogin={false}
                hasRegister={false}
            />
            <PublicAreaSection />
            <Footer />
    </React.Fragment>
    );
}
 
export default PublicArea;