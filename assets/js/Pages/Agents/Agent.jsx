import React from "react";
import {Box, Flex, Heading, Paragraph} from "theme-ui";
const Agent =({firstName,indentificationCode,lastName,nationality,birthDate})=>{
    return(
        <React.Fragment>
            <Box as='article' sx={{
                gridColumnStart:[1],
                gridColumnEnd:[1,2,2,5]
            }}>
                <Heading as='h3' sx={{
                    textAlign:'center',
                }}>Agent</Heading>
                <section>
                    <Box>
                        <Paragraph>Non: <Paragraph as='span'>{lastName}</Paragraph></Paragraph>
                        <p>Prenom: <Paragraph as='span'>{firstName}</Paragraph></p>
                    </Box>
                    <Box>
                        <Paragraph>Nationaliter : <Paragraph as='span'>{nationality}</Paragraph></Paragraph>
                        <Paragraph>Code d'idetification : <Paragraph as='span'>{indentificationCode}</Paragraph></Paragraph>
                    </Box>
                </section>
                <Box>
                    <Paragraph>
                        {
                            new Date(birthDate).toDateString()
                        }
                    </Paragraph>
                </Box>
            </Box>
        </React.Fragment>
    )
}
export default Agent