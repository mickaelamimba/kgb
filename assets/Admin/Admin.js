import React from 'react';

import Menu from "../js/Componets/Menu/Menu";
import Layout from "../js/Componets/Layout";
import theme from "../js/theme";
import {ThemeProvider} from "theme-ui";
import HandelRoute from "../js/Componets/Route/HandelRoute";
import Agents from "./Componets/Agents/Agents";
import Specialite from "./Componets/Specialite/Specialite";
import Mission from "./Componets/Mission/Mission";
import Target from "./Componets/Target/Target";

const Admin =()=>{
    const routes =
        [

            {
                path:'/Admin/agent',
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

    const Lists =
        [
            {
                path:'/',
                name:'Home'
            },
            {
                path:'/Admin/agent',
                name:'Agents'
            },
            {
                path:'/Admin/specialite',
                name:'specialite'
            },
            {
                path:'/Admin/mission',
                name:'Mission'
            }
            ,
            {
                path:'/Admin/target',
                name:'Target'
            }

        ]
    return (
        <ThemeProvider theme={theme}>
       <Layout navBar={ Menu(Lists)}>
           {

               routes.map((route,i)=>(
                   <HandelRoute key={i}{...route} />

               ))
           }

       </Layout>
        </ThemeProvider>


    )
}
export default Admin