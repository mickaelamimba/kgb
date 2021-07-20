import React from 'react';
import BoxHeading from "../UI/BoxHeading/BoxHeading";
import {Box} from "theme-ui";
import Card from "../UI/Card/Card";
import useNewAgents from "../../Hooks/useNewAgents";
const Home =()=>{

    return (
        <BoxHeading  title='Home'>
            <Box sx={{
                display:'flex',
                justifyContent:"space-between",
                flexWrap:'wrap',
                width:700
            }
            }>
                <Card title='Agents' counter='12'path='agents'/>
                <Card title='Spécialités' counter='3' path='specialite'/>
                <Card title='Contacts' counter='19' path='contact'/>
                <Card title='Missions' counter='3' path='mission'/>
                <Card title='Cibles' counter='30' path='target'/>
                <Card title='Planques' counter='9' path='stashs'/>
            </Box>

        </BoxHeading>
    )
}

export default Home