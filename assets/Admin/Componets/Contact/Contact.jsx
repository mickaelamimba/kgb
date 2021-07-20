import React from 'react';
import {Button, Heading} from "theme-ui";
import BoxHeading from "../UI/BoxHeading/BoxHeading";
import useContact from "../../Hooks/useContact";
const Contacts =()=>{
   const {formContactInput} =useContact()
    return(
        <BoxHeading title='Contacts' >

            <Button onClick={handleOpen}>ADD NEW AGENT</Button>
            {

            }

        </BoxHeading >
    )
}

export default Contacts