
import React from 'react';
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";

import PropTypes from 'prop-types';


const Create =({close})=>{
    const { formContactInput, handleOpenModal, handlePostContact} =useContactsCRUD()
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