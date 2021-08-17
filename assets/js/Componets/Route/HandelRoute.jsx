import React from 'react';
import {Route} from "react-router-dom";


const HandelRoute = (route)=>{


    return(
        <React.Fragment>

        <Route
           path={route.path}


               render={props=>(
                   <route.component{...props} />

               )}


        />
        </React.Fragment>
    )
}
export default HandelRoute