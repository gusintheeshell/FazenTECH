import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../src/pages/Logon/index';
import Register from '../src/pages/Register/index';
import Product from '../src/pages/Product/index';
import ProductList from '../src/pages/ProductList/index';
import AuthContext from '../src/contexts/auth';

export default function Routes(){
    const { signed } = useContext(AuthContext);
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                {signed === false ? 
                (
                    <>
                        <Route path="/" exact component={Logon} />
                        <Route path="/register" component={Register} />
                    </>
                ) : (
                    <>
                        <Route path="/add-product" component={Product} />
                        <Route path="/products" component={ProductList} />
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}