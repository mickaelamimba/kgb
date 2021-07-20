import React from 'react';
import {Box, Paragraph} from "theme-ui";
const DisplayMessage = ({ message, backgroundColor }) => {
    return (
        <Box mb={3} sx={
            {
                backgroundColor:backgroundColor,
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius:5,


                'p':{
                    color: 'white',
                    padding:2,
                }
            }
        } >
            <Paragraph>{message}</Paragraph>
        </Box>
    )
}
export default DisplayMessage