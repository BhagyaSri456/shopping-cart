import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ShoppingList from '../components/ShoppingList';
import ViewProduct from '../components/ViewProduct';
import Cart from '../components/Cart';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" exact component={ShoppingList} />
                <Route path="/item/:id" component={ViewProduct} />
                <Route path="/cart" component={Cart} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </HashRouter>
);

export default AppRouter;