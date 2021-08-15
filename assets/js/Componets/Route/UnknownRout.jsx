import React from "react";
import {useLocation} from "react-router";
import {Box, Flex, Heading, Paragraph} from "theme-ui";
const UnknownRout =()=>{
    const {pathname}=useLocation()
    return(
        <Flex sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent:"center",
            position:['static','absolute'],
            top:[0,'50%'],
            left: [0,'50%'],
            transform: ["none",'translate(-50%, -50%)'],

        }}>
            <Box sx={{
                "span":{
                    color:'primary',
                    borderRight: ['none','1px solid #ccc'],
                    paddingRight:[0,3],


                }
            }}>


            <Heading sx={{
                fontSize:[6,5,7]
            }} as='h2'><span>404</span> Une erreur est survenue</Heading>
            <Paragraph sx={{
                color:'secondary'
            }}>La Page {pathname} n'existe pas</Paragraph>
            </Box>
        </Flex>
    )
}
export default UnknownRout