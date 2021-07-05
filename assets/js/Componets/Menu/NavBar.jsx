import React from 'react';
import {Button} from "theme-ui";
import {Redirect, useHistory} from "react-router-dom";
const MenuItem =({children})=>{
    const history = useHistory()


    return(
        <nav>
            <Redirect to={location}/>
            <Button variant='simple' onClickCapture={()=>history.push('/')} mr={2}>Home</Button>
            <ul>
                {children}
            </ul>

        </nav>
    )
}
export default MenuItem