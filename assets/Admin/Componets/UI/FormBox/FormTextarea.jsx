import React, {forwardRef} from "react";
import {Box, Label, Paragraph, Textarea} from "theme-ui";
import PropTypes from "prop-types";

const FormTextarea=forwardRef(({ label , id ,errors ,...inputProps},ref)=>{
    return <Box>
        {label ? <Label htmlFor={id}> {label} </Label> :null }


        <Textarea mb={3} sx={{
            backgroundColor: 'hsl(0, 0%, 100%) ',
            borderColor: "hsl(0, 0%, 80%)",
            border:'1px solid',
            borderRadius:4}}
               ref={ref}
               {...inputProps}
        />
        {errors ? <Paragraph color='danger' mb={3}> {errors}</Paragraph> : null}

    </Box>
})

export default FormTextarea

FormTextarea.defaultProps = {
    label: '',
    id: '',
}
FormTextarea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    errors: PropTypes.string,
    inputProps : PropTypes.array,


}