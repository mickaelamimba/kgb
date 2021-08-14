import React from "react";
import {Box, Label, Paragraph} from "theme-ui";
//import Select from"react-select"
import ReactSelect from "react-select";
import PropTypes from "prop-types";
import { Controller} from "react-hook-form";

const FormSelectInput =(({ label , id ,errors , name,data, control,...options})=>{
    return <Box mb={3}>
        {label ? <Label htmlFor={id}> {label} </Label> :null }
        <Controller name={name}

                    control={control}
                    render={({ field })=><ReactSelect

                        {...field}
                        value={
                            field.value!== undefined ?Array.isArray(field.value)?
                                data.filter(({ value }) => field.value.includes(value) ):
                                data.filter(({ value }) => value === field.value):''
                        }

                        onChange={(e)=>field.onChange( Array.isArray(e) ?  e.map(({value} ) =>value):e.value)}
                        options={data}
                        getOptionLabel={({ label }) => label}
                        getOptionValue={({ value }) => value}
                        {...options}
                    />} />
        {errors ? <Paragraph color='danger' mb={3}> {errors}</Paragraph> : null}

    </Box>
})

export default FormSelectInput

FormSelectInput.defaultProps = {
    label: '',
    id: '',
    data:[{}]
}
FormSelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    errors: PropTypes.string,
    control: PropTypes.object,





}
