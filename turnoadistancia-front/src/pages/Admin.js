import React from 'react';
// components
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import AdminSection from'../components/AdminSection';

const Admin = () => {
    return (
        <React.Fragment>
            <Header
                hasLogin={false}
                hasRegister={false}
            />
            <AdminSection />
            <Footer />
    </React.Fragment>
    );
}
 
export default Admin;