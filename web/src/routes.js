import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../src/pages/Logon/index';
import Register from '../src/pages/Register/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}