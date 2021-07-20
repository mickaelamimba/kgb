import React from 'react';


import theme from "../js/theme";
import {ThemeProvider} from "theme-ui";
import HandelRoute from "../js/Componets/Route/HandelRoute";
import Agents from "./Componets/Agents/Agents";
import Specialite from "./Componets/Specialite/Specialite";
import Mission from "./Componets/Mission/Mission";
import Target from "./Componets/Target/Target";
import Layout from "./Componets/UI/Layout/Layout";
import {Switch, useLocation} from "react-router-dom";
import Create from "./Componets/Agents/Create";
import Edit from "./Componets/Agents/Edit";
import Home from "./Componets/Home/Home";


const Admin = () => {
    const location = useLocation()
    const routes =
        [

            {
                path: '/Admin/agents/:id',
                component: Agents
            },
            {
                path: '/Admin/agents/:id/modify/:id',
                component: Edit
            },
            {
                path: '/Admin/agents/:id/added/',
                component: Create
            },
            {
                path: '/Admin/specialite',
                component: Specialite
            },
            {
                path: '/Admin/mission',
                component: Mission
            }
            ,
            {
                path: '/Admin/target',
                component: Target
            },
            {
                path: '/Admin',
                component: Home
            }


        ]


    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch location={location}>
                    {

                        routes.map((route, i) => (
                            <HandelRoute key={i}{...route} />

                        ))
                    }
                </Switch>
            </Layout>
        </ThemeProvider>


    )
}
export default Admin