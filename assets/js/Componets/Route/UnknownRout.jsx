import React from "react";
import {useLocation} from "react-router";
import {Heading, Paragraph} from "theme-ui";
const UnknownRout =()=>{
    const {pathname}=useLocation()
    return(
        <div>
            <Heading as='h2'>Une erreur est survenue</Heading>
            <Paragraph>La Page {pathname} n'existe pas</Paragraph>
        </div>
    )
}
export default UnknownRout