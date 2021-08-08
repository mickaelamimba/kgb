import React from 'react';

import PropTypes from 'prop-types';
import CreateBox from "../CreateBox/CreateBox";



const Create =({ close,formTitleBtn,children })=>{

    return(
        <CreateBox
            handleClose={close}
            title={formTitleBtn}
        >
            {children}

        </CreateBox>
    )
}
export default Create
Create.defaultProps = {
    formTitleBtn:'Ajouter un Contacts',


}
Create.propTypes={
    close : PropTypes.func.isRequired,
    formTitleBtn :PropTypes.string,
}