import React from 'react'
import Agent from "../Agents/Agent";
import Specialite from "../Specialite/Specialite";
import Stashs from "../Stashs/Stashs";
import Target from "../Target/Target";

import {Box, Flex, Grid, Heading, Paragraph} from "theme-ui";
const MissionOneById =({title,codeName, description, country,missionType,
                           status,agents,endDate,startDate,specialties,
                           stashs,targets})=>{

    return(
        <React.Fragment>
            <Grid gap={[1,2,3]} width={[228, 230, 292,200]}>
            <Box as='section' sx={{
                gridColumnStart:[1],
                gridRowStart:[1],
                gridRowEnd:[4],
                gridColumnEnd:[2,3,4,5]
            }} >
                <Heading py={2} as='h2' sx={{
                    textAlign: 'center',
                    borderTop: '1px solid #2d3748',
                    borderBottom: '1px solid #2d3748',

                }}>{title}</Heading>
                <Flex sx={{
                    justifyContent: 'space-between'
                }}>

                    <Paragraph>type de mission :  <Paragraph as='span'>{missionType}</Paragraph></Paragraph>
                    <Paragraph>statut : <Paragraph as='span'>{status}</Paragraph> </Paragraph>
                </Flex>
                <article>
                    <Paragraph py={3} sx={{
                        textAlign: 'justify'

                    }}>
                        {description}

                    </Paragraph>
                    <Flex sx={{
                        justifyContent: 'space-around'
                    }}>
                        <p>Non de code : <span>{codeName}</span></p>
                        <p>Pays : <span>{country}</span></p>
                    </Flex>
                    <Flex sx={{
                        justifyContent: 'flex-end'

                    }}>
                        <Paragraph px={1}>debut: <span>{new Date(startDate).toDateString()}</span></Paragraph>
                        <Paragraph>fin: <span>{new Date(endDate).toDateString()}</span></Paragraph>
                    </Flex>

                </article>
            </Box>
            <Specialite {...specialties}/>
            {
                agents.map((agent,i)=>{
                   return <Agent key={i}
                        {...agent}/>
                })
            } {

                   <Stashs{...stashs}/>

            }{
            targets.map((target,i)=>{
                   return <Target key={i}
                        {...target}/>
                })
            }

            </Grid>
        </React.Fragment>)
}
export default MissionOneById

