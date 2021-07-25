
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Box, Button, Flex, Input, Label, Paragraph, Select} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";
import useContact from "../../Hooks/useContact";
import DisplayValidRequest from "../UI/DisplayMessage/DisplayValidRequest";
import DisplayError from "../UI/DisplayMessage/DisplayError";
import Configs from "../../Config/Config.json";


const FormContacts =({title, onSubmit})=>{
    const {submitErrors,setSubmitErrors}=useContact()
    const schema  =yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),

        codeName: yup.string().required(),
        nationality: yup.string().required(),
    })

    const {register,handleSubmit, formState:{errors ,isSubmitSuccessful,
        isSubmitted, isSubmitting,hasSubmitErrors, isValid, } }=useForm(
        { resolver: yupResolver(schema),}
    )


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                isSubmitted  && isSubmitSuccessful ? <DisplayValidRequest message={Configs.submitSuccess.success}/>: null

            }{
                isSubmitted && isValid ? isSubmitSuccessful ===false ?<DisplayError message={Configs.submitErrors.error}/>: null:null
        }
           <Flex sx={{
               justifyContent:'space-around',
               flexWrap: 'wrap'
           }}>
               <Input type='text' mb={3} name='firstName'{...register('firstName')}
                      placeholder='Prénom' sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
               />
               <Paragraph color='danger' mb={3}> {errors.firstName?.message}</Paragraph>
               <Input type='text' mb={3} name='lastName'{...register('lastName')}
                      placeholder='Nom' sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
               />
               <Paragraph color='danger' mb={3}> {errors.lastName?.message}</Paragraph>
           </Flex>
            <Box>
                <Label htmlFor='birthDate'> date de naissance </Label>
                <Input type='date' mb={3} name='birthDate'{...register('birthDate')}
                       sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
                />
                <Paragraph color='danger' mb={3}> {errors.birthDate?.message}</Paragraph>
                <Input type='text' mb={3} name='CodeName'{...register('codeName')}
                       placeholder='Nom de Code' sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
                />
                <Paragraph color='danger' mb={3}> {errors.codeName?.message}</Paragraph>
            </Box>
            <Box>
                <Select mb={3} {...register('nationality')} >
                    {
                        Pays.map(pay => <option key={pay.id} value={pay.nationalite}> {pay.nationalite}</option>)
                    }
                </Select>
            </Box>
            <Button disabled={isSubmitting} >{title}</Button>
        </form>
    )
}
export default FormContacts

FormContacts.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired,

}