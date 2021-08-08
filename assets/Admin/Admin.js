import React from 'react';


import theme from "../js/theme";
import {ThemeProvider} from "theme-ui";
import HandelRoute from "../js/Componets/Route/HandelRoute";

import SpecialitesView from "./Pages/Specialite/SpecialitesView";
import Mission from "./Pages/Mission/Mission";
import Target from "./Pages/Target/Target";
import Layout from "./Componets/UI/Layout/Layout";
import {Route, Switch, useLocation} from "react-router-dom";


import Home from "./Pages/Home/Home";
import ContactsView from "./Pages/Contact/ContactsView";
import Stashs from "./Pages/Stashs/Stashs";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import {OpenModalProvider} from "./Context/OpenModalContext";
import * as ShowAgent from "./Pages/Agents/Show";
import AgentsView from "./Pages/Agents/AgentsView";
import  ShowContact from "./Pages/Contact/ShowContact";
import ShowSpecialites from "./Pages/Specialite/ShowSpecialites";


const queryClient = new QueryClient()

const Admin = () => {
    const location = useLocation()
    const routes =
        [

            {
                path: '/Admin/agents/:id',
                component: AgentsView
            },
            {
                 path: '/Admin/agents/:id/show/',
                component: ShowAgent
            },
            {
                path: '/Admin/specialities/:id',
                component: SpecialitesView
            },
            {
                path: '/Admin/specialities/:id',
                component: ShowSpecialites
            },
            {
                path: '/Admin/contacts/:id',
                component: ContactsView
            },
            {
                path: '/Admin/contacts/:id/show/',
                component: ShowContact
            },

            {
                path: '/Admin/missions/:id',
                component: Mission
            }
            ,
            {
                path: '/Admin/targets/:id',
                component: Target
            },
            {
                path: '/Admin/stashs/:id',
                component: Stashs
            },




        ]


    return (
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch location={location}>
                    <OpenModalProvider>

                    <Route exact path ='/Admin'>
                        <Home />
                    </Route>
                    {


                        routes.map((route, i) => (
                            <HandelRoute key={i}{...route} />

                        ))
                    }

                    </OpenModalProvider>
                </Switch>
                <ReactQueryDevtools initialIsOpen={false} />
            </Layout>
        </ThemeProvider>
</QueryClientProvider>


    )
}
export default Admin