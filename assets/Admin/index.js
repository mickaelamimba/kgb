import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css'

import {BrowserRouter} from "react-router-dom";
import Admin from "../Admin/Admin";





ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>

                <Admin />

            </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root_admin')
);