import React from 'react';

import PropTypes from 'prop-types';
import CreateBox from "../CreateBox/CreateBox";
import FormBox from "./FormBox";


const Create =({ close,formTitleBtn,children })=>{

    return(
        <CreateBox
            handleClose={close}
            title={formTitleBtn}
        >
            <FormBox
                formInput={children}

            />



        </CreateBox>
    )
}
export default Create
Create.defaultProps = {
    formTitleBtn:'Ajouter un Contacts',
    boxTitle:'Ajouter'

}
Create.propTypes={
    formInput : PropTypes.array,
    close : PropTypes.func.isRequired,
    boxTitle: PropTypes.string,
    formTitleBtn :PropTypes.string,
}