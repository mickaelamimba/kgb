import React, {useEffect, useState} from 'react';
import {Box, Button, Heading, Input, Label, Select, Textarea} from "theme-ui";
import useNewMission from "../../Hooks/useNewMission";
import Create from "./Create";

const Mission=()=>{


const {formMissionInput,handleSubmit,openMission, handleOpen, handleClose}=useNewMission()
    return(
        <div>
            <title>Mission</title>
            <Heading mb={3} as='h1'>Mission</Heading>
            <Button onClick={handleOpen}>ADD NEW  MISSION</Button>

            {
                openMission ? <Create formMissionInput={formMissionInput}  handleSubmit={handleSubmit} handleClose={handleClose}/>: null
            }
        </div>
    )
}
export default Mission