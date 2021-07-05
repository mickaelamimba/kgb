import React from 'react';
import {Box, Button, Flex, Input, Label} from "theme-ui";


const Agents =()=>{

    return (
        <Box as="form" onSubmit={(e) => e.preventDefault()}>

            <Box>
                <Flex >
                 <Label htmlFor="userlastname">Non</Label>
                     <Input name="userlastname" id="userlastname" mb={3} />
                <Label htmlFor="username">Prenom</Label>
                    <Input name="username" id="username" mb={3} />
                </Flex>
                <Input type="date" name="userbirthday"  mb={3} />

            </Box>

            <Button>Creer</Button>
        </Box>
      )
}
export default Agents