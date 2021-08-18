import React from 'react';
import {Box} from "theme-ui";

const NaveItem =({children})=>{
    return(
        <Box as='ul' sx={{
            position:'relative',
            top: 0,
            'li':{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '1.6em',
                padding: '15px 30px',
                transition: 'all 250ms',

                '&:hover':{
                    padding:' 15px 45px',
                    backgroundColor: 'primaryMuted'
                },
                'a':{
                    color:'background',
                    textDecoration:'none',
                    paddingLeft:12
                }
            }
        }} >
            {children}
        </Box>

    )
}
export default NaveItem