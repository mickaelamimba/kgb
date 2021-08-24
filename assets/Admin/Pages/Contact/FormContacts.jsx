
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button, Flex, Grid} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";

import DisplayValidRequest from "../../Componets/UI/DisplayMessage/DisplayValidRequest";
import DisplayError from "../../Componets/UI/DisplayMessage/DisplayError";
import Configs from "../../Config/Config.json";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import FormAgent from "../Agents/FormAgent";



const FormContacts =({title, onSubmit,valueUpdate})=>{

    const schema  =yup.object().shape({
        firstName: yup.string().required(Configs.formMessage.firstNameRequired),
        lastName: yup.string().required(Configs.formMessage.lastNameRequired),
        birthDate : yup.date().max(new Date(), Configs.formMessage.birthDateRequired),
        codeName: yup.string().required(Configs.formMessage.codeNameRequired),
        nationality: yup.string().required(Configs.formMessage.nationalityRequired),

    })
    const optionsNationality =Pays.map(({nationalite})=> {
        return {value:nationalite,label:nationalite}
    })
    const {register,handleSubmit, control, formState:{errors , isSubmitting } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),
        defaultValues:valueUpdate,}
    )


    return(
        <form onSubmit={handleSubmit(onSubmit)}>

           <Grid columns={[1,2]}>
               <FormInput
                   errors={errors.firstName?.message} type='text' name='firstName' placeholder='prénom'{...register('firstName')}
               />
               <FormInput
                   errors={errors.lastName?.message} type='text' name='lastName' placeholder='Nom'{...register('lastName')}
               />

           </Grid>
            <Grid columns={[1,2]}>
                <FormSelectInput
                    label='Nationalité'
                    id='nationality'
                    name='nationality'
                    control={control}
                    errors={errors.nationality?.message}
                    data={optionsNationality }


                />
                <FormInput
                    label=' Date de naissance' id='birthDate'
                    errors={errors.birthDate?.message} type='date' name='birthDate'{...register('birthDate')}
                />
            </Grid>


                <FormInput
                    errors={errors.codeName?.message} type='text' name='codeName' placeholder='Nom de Code'{...register('codeName')}
                />


            <Button disabled={isSubmitting} >{title}</Button>
        </form>
    )
}
export default FormContacts
FormContacts.defaultProps = {
    title: 'Ajouter',
    valueUpdate: '',
}

FormContacts.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired,

}