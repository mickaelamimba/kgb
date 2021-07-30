
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Box, Button, Flex, Input, Label, Paragraph, Select} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";

import DisplayValidRequest from "../UI/DisplayMessage/DisplayValidRequest";
import DisplayError from "../UI/DisplayMessage/DisplayError";
import Configs from "../../Config/Config.json";
import FormInput from "../UI/FormBox/FormInput";
import FormSelectInput from "../UI/FormBox/FormSelectInput";


const FormContacts =({title, onSubmit})=>{

    const schema  =yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        birthDate : yup.date().required(),
        codeName: yup.string().required(),
        nationality: yup.string().required(),

    })

    const {register,handleSubmit, formState:{errors ,isSubmitSuccessful,
        isSubmitted, isSubmitting, isValid, } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),}
    )


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                isSubmitted  && isSubmitSuccessful ? <DisplayValidRequest message={Configs.submitSuccess.success}/>: null

            }{
                isSubmitted && isValid ? isSubmitSuccessful ===false ?<DisplayError message={Configs.submitErrors.error}/>: null:null
        }
           <Flex sx={{
               justifyContent:'space-between',
              alignItems: 'stretch'

           }}>
               <FormInput
                   errors={errors.firstName?.message} type='text' name='firstName' placeholder='prénom'{...register('firstName')}
               />
               <FormInput
                   errors={errors.lastName?.message} type='text' name='lastName' placeholder='Nom'{...register('lastName')}
               />

           </Flex>

                <FormInput
                    label=' date de naissance' id='birthDate'
                    errors={errors.birthDate?.message} type='date' name='birthDate'{...register('birthDate')}
                />
                <FormInput
                    errors={errors.codeName?.message} type='text' name='codeName' placeholder='Nom de Code'{...register('codeName')}
                />
            <FormSelectInput
                label='Nationalité'
                id='nationality'
                errors={errors.nationality?.message}
                {...register('nationality')}
                options={Pays.map(pay => <option key={pay.id} value={pay.nationalite}> {pay.nationalite}</option>)}

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