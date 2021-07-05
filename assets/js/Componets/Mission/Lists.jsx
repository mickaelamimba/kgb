import React from "react";
import { useHistory} from "react-router-dom";

import { Button, Card, Heading, Paragraph, Box} from "theme-ui";


const Lists =({id,title,codeName, description, country,missionType,status})=>{
    let history=useHistory()
    let variant

    status === 'En préparation' ? variant='cards.preparation' : status === 'en cours' ? variant='cards.progress' :
    status === 'terminé' ? variant='cards.finished' :
    status === 'échec' ? variant='cards.failure' :variant='cards'


    return(
        <React.Fragment>

            <Card as="section"
                  p={4} my={4} sx={{
                    borderRadius:4 ,

                }}

                  variant={variant}>

                <Heading as={"h2"} sx={
                    {textAlign:'center'}
                }>{title}</Heading>

                <Box sx={
                    {
                        display:'flex',
                        justifyContent:'space-between'
                    }
                }>
                    <Paragraph>type de mission : <Paragraph as='span'>{missionType}</Paragraph></Paragraph>
                    <Paragraph>statut : <Paragraph as='span'>{status}</Paragraph> </Paragraph>
                </Box>
                <article>
                    <Paragraph py={3} sx={{
                        textAlign:'justify'
                    }}>{description}</Paragraph>
                    <Box>
                        <Paragraph>Non de code : <Paragraph as='span'>{codeName}</Paragraph></Paragraph>
                        <Paragraph>Pays : <Paragraph as='span'>{country}</Paragraph></Paragraph>
                    </Box>
                    <Button variant='simple' onClickCapture={()=>history.push(`/missions/${id}`)} mr={2}>Lire la suite </Button>
                </article>
            </Card>
        </React.Fragment>
    )
}
export default Lists