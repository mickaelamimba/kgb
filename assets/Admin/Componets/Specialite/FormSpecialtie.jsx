
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button, Input, Paragraph} from "theme-ui";
import * as yup from "yup";

const FormSpecialtie =({title, onSubmit})=>{
    const schema  =yup.object().shape({
        name : yup.string().required('la Specialite est requie')
    })

    const {register,handleSubmit, formState:{errors} }=useForm(
        { resolver: yupResolver(schema),}
    )
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type='text'
                   mb={3}
                   name='name'
                   {...register('name')}
                   placeholder='Specialiter'
                   sx={{
                       filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                   }}
            />
            <Paragraph color='danger' mb={3}> {errors.name?.message}</Paragraph>
            <Button>{title}</Button>
        </form>
    )
}
export default FormSpecialtie

FormSpecialtie.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired
}