import React, {forwardRef} from "react";
import {Box, Input, Label, Paragraph, Select} from "theme-ui";
import PropTypes from "prop-types";


const FormSelectInput =forwardRef(({ label , id ,errors ,options},ref)=>{
    return <Box>
        {label ? <Label htmlFor={id}> {label} </Label> :null }
        <Select mb={3} ref={ref} >
            {
                options
            }
        </Select>
        {errors ? <Paragraph color='danger' mb={3}> {errors}</Paragraph> : null}

    </Box>
})

export default FormSelectInput

FormSelectInput.defaultProps = {
    label: '',
    id: '',
}
FormSelectInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    errors: PropTypes.object,
    options : PropTypes.arrayOf(PropTypes.object)



}
