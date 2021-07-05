
import React from 'react';

import theme from "./theme";

import Layout from "./Componets/Layout";
import{ThemeProvider} from"theme-ui"
import Mission from "./Componets/Mission/Mission";
import HandelRoute from "./Componets/Route/HandelRoute";
import OneById from "./Componets/Mission/OneById";
import {Route, Switch} from "react-router-dom";

import Menu from "./Componets/Menu/Menu";



function App(){
    const routes =[
        {
            path:'/missions/:id',
            component : OneById

        },


    ]
    const Lists =
        [
            {
                path:'/',
                name:'Mission'
            },


        ]
   return(

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

           </Layout>
           </Switch>
       </ThemeProvider>

   )
}

export default App