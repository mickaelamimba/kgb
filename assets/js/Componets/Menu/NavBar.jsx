import React from 'react';
import {Box, Button} from "theme-ui";
import {Redirect, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
const MenuItem =({children})=>{
    const history = useHistory()
     const home=   <FontAwesomeIcon icon={faHome} />

    return(
        <Box as='nav' p={2}>
            <Redirect to={location}/>
            <Button variant='simple' onClickCapture={()=>history.push('/')} mr={2}>{home}</Button>
            <ul>
                {children}
            </ul>

        </Box>
    )
}
export default MenuItem