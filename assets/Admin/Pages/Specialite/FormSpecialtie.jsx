
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button, Input, Paragraph} from "theme-ui";
import * as yup from "yup";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";

const FormSpecialtie =({title,defaultData, onSubmit})=>{

    const schema  =yup.object().shape({
        name : yup.string().required('la Specialite est requie')
    })

    const {register,handleSubmit, formState:{errors} }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),
            defaultValues:defaultData
        }
    )
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                errors={errors.name?.message} type='text' name='name' placeholder='Specialit√©'{...register('name')}
            />

            <Button>{title}</Button>
        </form>
    )
}
export default FormSpecialtie
FormSpecialtie.defaultProps = {
    title: 'Ajouter',
    defaultData:{}
}

FormSpecialtie.propTypes ={
    title : PropTypes.string,

}