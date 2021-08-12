
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button, Flex} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";

import DisplayValidRequest from "../../Componets/UI/DisplayMessage/DisplayValidRequest";
import DisplayError from "../../Componets/UI/DisplayMessage/DisplayError";
import Configs from "../../Config/Config.json";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";



const FormContacts =({title, onSubmit,defaultProps})=>{

    const schema  =yup.object().shape({
        firstName: yup.string().required(Configs.formMessage.firstNameRequired),
        lastName: yup.string().required(Configs.formMessage.lastNameRequired),
        birthDate : yup.date().required(Configs.formMessage.birthDateRequired),
        codeName: yup.string().required(Configs.formMessage.codeNameRequired),
        nationality: yup.string().required(Configs.formMessage.nationalityRequired),

    })
    const optionsNationality =Pays.map(({nationalite})=> {
        return {value:nationalite,label:nationalite}
    })
    const {register,handleSubmit, control, formState:{errors , isSubmitting, } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),
        defaultValues:defaultProps,}
    )


    return(
        <form onSubmit={handleSubmit(onSubmit)}>

           <Flex sx={{
               justifyContent:'space-around',
               'div':{
                   flex:1 ,
                   paddingLeft:2
               }

           }}>
               <FormInput
                   errors={errors.firstName?.message} type='text' name='firstName' placeholder='prénom'{...register('firstName')}
               />
               <FormInput
                   errors={errors.lastName?.message} type='text' name='lastName' placeholder='Nom'{...register('lastName')}
               />

           </Flex>

                <FormInput
                    label=' Date de naissance' id='birthDate'
                    errors={errors.birthDate?.message} type='date' name='birthDate'{...register('birthDate')}
                />
                <FormInput
                    errors={errors.codeName?.message} type='text' name='codeName' placeholder='Nom de Code'{...register('codeName')}
                />
            <FormSelectInput
                label='Nationalité'
                id='nationality'
                name='nationality'
                control={control}
                errors={errors.nationality?.message}
                data={optionsNationality }


            />

            <Button disabled={isSubmitting} >{title}</Button>
        </form>
    )
}
export default FormContacts

FormContacts.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired,

}