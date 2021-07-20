import React from 'react';
import {Box, Heading, Paragraph} from "theme-ui";
import {useHistory} from "react-router-dom";

const Card =({title, counter, path})=>{
    let TextLogo = title.toUpperCase().slice(0,2)
    const history=useHistory()

    return(
        <Box m={3} onClick={()=>history.push(`/Admin/${path}/1`)} bg='muted' sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:3,
            flexDirection:"column",
            width: 200,
            height: 200,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            transition:'box-shadow  150ms cubic-bezier(0.4, 0, 0.2, 1)',
            cursor:'pointer',
            border:'1px solid',
            borderColor:'tablebg',
            '&:hover':{
                boxShadow:'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }
            }
        }>
            <Box mb={2} bg='primary' sx={{
                borderRadius:'1000%',
                textAlign:"center",
                color:"white",
                fontSize:33,
                fontWeight:"bold",
                width:73,


            }}><Paragraph p={3}>{TextLogo}</Paragraph></Box>
            <Box>


                <Heading as="h2">{title}</Heading>
            </Box>
            <Box>
                <Paragraph>{counter}</Paragraph>
            </Box>


        </Box>
    )
}
export default Card