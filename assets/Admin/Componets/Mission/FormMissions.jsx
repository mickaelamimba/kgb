
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Box, Button, Flex, Input, Label, Paragraph, Select} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";
import FormInput from "../UI/FormBox/FormInput";
import FormSelectInput from "../UI/FormBox/FormSelectInput";


const FormMissions =({title, onSubmit})=>{
    const schema  =yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        codeName: yup.string().required(),
        country: yup.string().required(),
        missionType: yup.string().required(),
        status: yup.string().required(),
        specialties: yup.string().required(),
        agents: yup.array().required(),
        contacts :yup.array().required(),
        stashs:yup.string().required(),
        targets:yup.array().required(),
        startDate: yup.date().required(),
        endDate: yup.date().required(),


        nationality: yup.string().required(),
    })

    const {register,handleSubmit, formState:{errors} }=useForm(
        { resolver: yupResolver(schema),}
    )
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                errors={errors.title?.message} type='text' name='title' placeholder='Titre'{...register('title')}
            />
            <FormInput
                errors={errors.description?.message} type='text' name='description' placeholder='description'{...register('description')}
            />
            <FormInput
                errors={errors.codeName?.message} type='text' name='codeName' placeholder='Nom de code'{...register('codeName')}
            />
            <FormSelectInput
                label='Pays'
                id='country'
                errors={errors.country?.message}
                {...register('country')}
                options={Pays.map(pay => <option key={pay.id} value={pay.libelle}> {pay.libelle}</option>)}

            />

            <Box>


                <Input type='text' mb={3} name='missionType'{...register('missionType')}
                       placeholder='Nom de Code' sx={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}
                />
                <Paragraph color='danger' mb={3}> {errors.missionType?.message}</Paragraph>
            </Box>
            <Box>
                <Select mb={3} {...register('country')} >
                    {
                        Pays.map(pay => <option key={pay.id} value={pay.libelle}> {pay.libelle}</option>)
                    }
                </Select>
                <Paragraph color='danger' mb={3}> {errors.country?.message}</Paragraph>
            </Box>
            <Button>{title}</Button>
        </form>
    )
}
export default FormMissions

FormMissions.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired
}