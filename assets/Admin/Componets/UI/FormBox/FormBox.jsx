
import React from 'react';
import PropTypes from 'prop-types';



const FormBox = ({formInput})=>{

    return(
<React.Fragment >
    {
        formInput
    }


</React.Fragment>

)

}

export default FormBox

FormBox.propTypes={
    formInput: PropTypes.object.isRequired,

}