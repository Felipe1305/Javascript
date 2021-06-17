import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Principal from './pages/principal';
import Detalhes from './pages/detalhes';

const Routes =() => (
    //React saber que o nosso roteamento será feito pelo navegaor
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal}/>
            <Route path="/detalhes/:id" component={Detalhes}/>
        </Switch>
    </BrowserRouter>

) 
export default Routes