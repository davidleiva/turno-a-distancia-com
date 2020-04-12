import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
// components
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import PublicSection from '../components/PublicSection';

const Public = () => {
    const history = useHistory();
    useEffect(() =>{
        // checkear si existe el workspace
        if(1===1) {
        // OBTENER LO NECESARIO
        } else {
        debugger;
        history.push("/error");
        }
    }, [history]);

    const workspace = 'Mercadona';

    return (
        <React.Fragment>
            <Header
                isTransparent
                hasLogin
            />
            <PublicSection />
            <Footer isWhite />
        </React.Fragment>
    )
}
 
export default Public;