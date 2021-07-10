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


const Admin =()=>{
 const location = useLocation()
    const routes =
        [

            {
                path:'/Admin/agents/:id',
                component :Agents
            },
            {
                path:'/Admin/specialite',
                component :Specialite
            },
            {
                path:'/Admin/mission',
                component :Mission
            }
            ,
            {
                path:'/Admin/target',
                component :Target
            }

        ]


    return (
        <ThemeProvider theme={theme}>
       <Layout >
            <Switch location={location} >
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
export default Admin