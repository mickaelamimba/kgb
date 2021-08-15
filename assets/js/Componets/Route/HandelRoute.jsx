import React, {useEffect} from 'react';
import {Route, useHistory, useParams} from "react-router-dom";


const HandelRoute = (route)=>{
    const history = useHistory()
    const titleTop =()=>{
        console.log(history.location)
       let towParams =history.location.pathname.match('([^a-zA-Z0-9_][a-zA-Z]+){2}')
        let oneParams =history.location.pathname.match('([^a-zA-Z0-9_][a-zA-Z]+){1}')

                if(towParams){
                    towParams.map((value)=>{
                        if(!value.match('([^a-zA-Z0-9_][a-zA-Z]+){2}')){

                            return document.title =value.slice(1).toUpperCase()
                        }

                    })
                }
                if(oneParams){
                    oneParams.map((value,i)=>{

                        if(i=== 1){
                            console.log(value.slice(1).toUpperCase())
                        }
                    })
                }



    }
    useEffect(() => {
        titleTop()

    });
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