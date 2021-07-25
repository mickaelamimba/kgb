
import React from 'react';
import CreateBox from "../UI/CreateBox/CreateBox";
import FormBox from "../UI/FormBox/FormBox";
import useContact from "../../Hooks/useContact";
import PropTypes from 'prop-types';


const Create =({close})=>{
    const { formContactInput, handleOpenModal, handlePostContact} =useContact()
    return(
        <CreateBox
            handleClose={close}
            title='Ajouter un Contacts'
        >
            <FormBox
                formInput={formContactInput}
                onSubmit={handlePostContact}
                title='Ajouter'
            />

</CreateBox>
    )
}
export default Create

Create.PropTypes={
   close : close.PropTypes.func
}