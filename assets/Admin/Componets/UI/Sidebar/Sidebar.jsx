import React from 'react';
import {Box, Close} from "theme-ui";

const Sidebar =({children,toggle, onClose})=>{
    return(
        <Box sx={{
            position:'fixed',
            zIndex:'4',
            overflow: 'auto',
            top:'0',
            left: toggle ? 0: -275,
            opacity: toggle ? 1 :0,
            width:275,
            padding:'20px 0',
            height:'100%',
            backgroundColor:'primaryHover',
            transition :'all 350ms  cubic-bezier(.6, .05, .28, .91)',
        }}>
            <Box sx={{textAlign:'end'}}>
                <Close onClick={onClose} /> 
            </Box>
            
            <Box as='nav' sx={{
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',

            }}>
                {children}
            </Box>

        </Box>
    )
}
export default Sidebar