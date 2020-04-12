import React from 'react';

// components
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer.js';


const Home = () => {
    return (
        <React.Fragment>
            <Header
                isTransparent
                hasLogin
            />
            <IntroSection />
            <Footer isWhite />
        </React.Fragment>
    );
}
 
export default Home;