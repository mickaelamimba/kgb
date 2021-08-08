
import React from 'react';

import theme from "./theme";

import Layout from "./Componets/Layout";
import{ThemeProvider} from"theme-ui"
import Mission from "./Pages/Mission/Mission";
import HandelRoute from "./Componets/Route/HandelRoute";
import OneById from "./Pages/Mission/OneById";
import {Route, Switch} from "react-router-dom";

import Menu from "./Componets/Menu/Menu";
import UnknownRout from "./Componets/Route/UnknownRout";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";



const queryClient = new QueryClient()
function App(){
    const routes =[
        {
            path:'/missions/:id',
            component : OneById

        }


    ]
    const Lists =
        [
            {
                path:'/',
                name:'Mission'
            },



        ]
   return(
       <QueryClientProvider client={queryClient}>
       <ThemeProvider theme={theme}>
           <Switch>
           <Layout navBar={Menu(Lists)}>
               <Route exact  path='/' >
               <Mission/>
               </Route>
                   {

                       routes.map((route,i)=>(
                           <HandelRoute key={i}{...route} />

                       ))
                   }
               <ReactQueryDevtools initialIsOpen={false} />
           </Layout>
           </Switch>
       </ThemeProvider>
       </QueryClientProvider>

   )
}

export default App