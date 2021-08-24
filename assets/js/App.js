
import React from 'react';
import theme from "./theme";
import Layout from "./Componets/Layout";
import{ThemeProvider} from"theme-ui"
import Mission from "./Pages/Mission/Mission";
import HandelRoute from "./Componets/Route/HandelRoute";
import { Route, Switch} from "react-router-dom";
import Menu from "./Componets/Menu/Menu";
import UnknownRout from "./Componets/Route/UnknownRout";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import ShowMission from "./Pages/Mission/ShowMission";





const queryClient = new QueryClient()
function App(){
    const routes =[

        {
            path:'/missions/:id',
            component : ShowMission

        },


        {
            path:'*',
            component : UnknownRout

        }


    ]
    const Lists = []
   return(

       <QueryClientProvider client={queryClient}>
       <ThemeProvider theme={theme}>

           <Layout navBar={Menu(Lists)}>

               <Switch>
                   <Route exact path="/">
                       <Mission/>
                   </Route>
                   {

                       routes.map((route,i)=>(
                           <HandelRoute key={i}{...route} />

                       ))
                   }
               </Switch>
               <ReactQueryDevtools initialIsOpen={false} />



           </Layout>

       </ThemeProvider>
       </QueryClientProvider>


   )
}

export default App