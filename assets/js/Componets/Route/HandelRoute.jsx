import React from 'react';
import {Redirect, Route} from "react-router-dom";
import UnknownRout from "./UnknownRout";



const HandelRoute = (route)=>{

    return(
        <React.Fragment>

        <Route
           exact path={route.path}
               render={props=>(
                   <route.component{...props} />

               )}


        />
        </React.Fragment>
    )
}
export default HandelRoute