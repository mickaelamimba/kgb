import React from 'react';
import {Box} from "theme-ui";

const NaveItem =({children})=>{
    return(
        <Box as='ul' sx={{
            position:'relative',
            top: 0}} >
            {children}
        </Box>

    )
}
export default NaveItem