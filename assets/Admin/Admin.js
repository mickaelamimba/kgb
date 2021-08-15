import React from 'react';


import theme from "../js/theme";
import {ThemeProvider} from "theme-ui";
import HandelRoute from "../js/Componets/Route/HandelRoute";

import SpecialitesView from "./Pages/Specialite/SpecialitesView";
import MissionsView from "./Pages/Mission/MissionsView";
import TargetsView from "./Pages/Target/TargetsView";
import Layout from "./Componets/UI/Layout/Layout";
import {Route, Switch, useLocation} from "react-router-dom";


import Home from "./Pages/Home/Home";
import ContactsView from "./Pages/Contact/ContactsView";
import StashsView from "./Pages/Stashs/StashsView";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import {OpenModalProvider} from "./Context/OpenModalContext";

import AgentsView from "./Pages/Agents/AgentsView";
import ShowAgent from "./Pages/Agents/ShowAgent";
import ShowSpecialites from "./Pages/Specialite/ShowSpecialites";
import ShowContact from "./Pages/Contact/ShowContact";
import ShowMissions from "./Pages/Mission/ShowMissions";
import UnknownRout from "../js/Componets/Route/UnknownRout";




const queryClient = new QueryClient()

const Admin = () => {
    const location = useLocation()
    const routes =
        [
            {
                path: '/Admin/agents/:id/show/',
                component: ShowAgent
            },
            {
                path: '/Admin/agents',
                component: AgentsView
            },

            {
                path: ['/Admin/specialities','/Admin/specialities/:id/show/'],
                component: SpecialitesView
            },
            {
                path: '/Admin/contacts/:id/show/',
                component: ShowContact
            },

            {
                path: '/Admin/contacts',
                component: ContactsView
            },
            {
                path: '/Admin/missions/:id/show/',
                component: ShowMissions
            }
            ,

            {
                path: '/Admin/missions',
                component: MissionsView
            }
            ,

            {
                path: '/Admin/targets',
                component: TargetsView
            },
            {
                path: '/Admin/stashs',
                component: StashsView
            },
            {
                path:'*',
                component : UnknownRout

            }




        ]


    return (

        <QueryClientProvider client={queryClient}>

        <ThemeProvider theme={theme}>
            <OpenModalProvider>
            <Layout>
                <Switch>
                    <Route exact path ='/Admin'>
                        <Home />
                    </Route>
                    {


                        routes.map((route, i) => (
                            <HandelRoute key={i}{...route} />

                        ))
                    }
                </Switch>

            </Layout>
            </OpenModalProvider>
        </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />

</QueryClientProvider>


    )
}
export default Admin