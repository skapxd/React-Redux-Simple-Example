import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen, nameLoginScreen } from '../screen/LoginScreen';
import { nameProductoScreen, ProductoScreen } from '../screen/ProductoScreen';

export const MainRouter = () => {
    return (
        <Router>

            <Switch >
                <Route path={nameProductoScreen}>
                    <ProductoScreen />
                </Route>

                <Route path={nameLoginScreen}>
                    <LoginScreen />
                </Route>

            </Switch>

        </Router>
    )
}
