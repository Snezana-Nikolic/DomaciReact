import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Blog from './pages/Blog';
import Doniraj from './pages/Doniraj';
import Galerija from './pages/Galerija';
import Home from './pages/Home';
import O_nama from './pages/O_nama';
import Prijatelji from './pages/Prijatelji';
import Vijesti from './pages/Vijesti';


const Router = () => {
    return(
        <div>
        <Route path= "/" exact component={Home} />
        <Route path= "/Doniraj" exact component={Doniraj}/>
        <Route path= "/Vijesti" exact component={Vijesti}/>
        <Route path= "/Blog" exact component={Blog}/>
        <Route path= "/Galerija" exact component={Galerija}/>
        <Route path= "/Prijatelji" exact component={Prijatelji}/>
        <Route path= "/O_nama" exact component={O_nama}/>

        </div>
    );
};

export default Router;