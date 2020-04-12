import React from 'react';
import './index.css';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Public from './pages/Public';
import ErrorPage from './pages/ErrorPage';
import PublicArea from './pages/PublicArea';
// Components
// import AuthComponent from './components/AuthComponent';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        {/* <AuthComponent> */}
        <Route path="/admin" exact component={Admin} />
        <Route path="/public/area" exact component={PublicArea} />
        {/* </AuthComponent> */}
        <Route path="/:username" exact component={Public} />        
        <Route path="/error" exact component={ErrorPage} />        
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;