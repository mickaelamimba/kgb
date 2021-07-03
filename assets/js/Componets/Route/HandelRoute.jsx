import React from 'react';
import {Route} from "react-router-dom";



const HandelRoute = (route)=>{

    return(

        <Route
            path={route.path}
               render={props=>(
                   <route.component{...props} />
               )}
        />
    )
}
export default HandelRoute