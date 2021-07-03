
import React from 'react';

import theme from "./theme";
import { ThemeProvider } from 'styled-components';
import Layout from "./Componets/Layout";
import Mission from "./Componets/Mission/Mission";
import HandelRoute from "./Componets/Route/HandelRoute";
import OneById from "./Componets/Mission/OneById";
import {Route, Switch} from "react-router-dom";
import Admin from "../Admin/Admin";
import Agents from "../Admin/Componets/Agents/Agents";





function App(){
    const routes =[
        {
            path:'/missions/:id',
            component : OneById

        },
        {
            path:'/admin/agent',
            component: Agents
        }
    ]
   return(

       <ThemeProvider theme={theme}>
           <Layout>
               <Switch>
                   <Route exact  path='/' >
                       <Mission />
                   </Route>
                   <Route exact  path='/admin' >
                       <Admin />
                   </Route>
                   {


                       routes.map((route,i)=>(
                           <HandelRoute key={i}{...route} />

                       ))
                   }

               </Switch>

           </Layout>

       </ThemeProvider>

   )
}

export default App