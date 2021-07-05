import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css'
import {Provider} from "react-redux";
import store from '../Store/'

import {BrowserRouter} from "react-router-dom";
import Admin from "../Admin/Admin";





ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>

                <Admin />

            </BrowserRouter>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root_admin')
);