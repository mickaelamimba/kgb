import React from 'react';
import {Box, Close, Heading} from "theme-ui";
const CreateBox =({handleClose, children ,title})=>{
    return(
        <Box sx={{
            position:'fixed',
            zIndex:1,
            left:0,
            top:0,
            width:'100%',
            height:'100%',
            overflow: 'auto',
            backgroundColor:'rgba(0,0,0,0.4)'

        }}>
            <Box sx={{
                backgroundColor:'light',
                margin :'15% auto',
                padding: 20,
                width:'80%',
                borderRadius:4,
                '& Close':{

                }
            }}><Box mb={3} sx={{textAlign:'end',}}>
                <Heading as='h2'>{title}</Heading>
                <Close onClick={handleClose}  />
            </Box>
                {
                    children
                }


            </Box>

        </Box>
    )

}

export default CreateBox