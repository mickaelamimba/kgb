import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import React from "react";
import Pays from "../../Nationality/Nationality";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import {Button} from "theme-ui";
import {useQuery} from "react-query";
import {Specialties} from "../../Func/apiUrl";
import Configs from "../../Config/Config.json";


const FormAgent =({title,onSubmit, valueUpdate})=>{

    const {data:specialties, isFetching}= useQuery('Specialties',  ()=>Specialties.fetchAll())
    const schema  =yup.object().shape({
        firstName: yup.string().required(Configs.formMessage.firstNameRequired),
        lastName: yup.string().required(Configs.formMessage.lastNameRequired),
        birthDate : yup.date().max(new Date(), Configs.formMessage.birthDateRequired),
        indentificationCode: yup.number().required(Configs.formMessage.indentificationCodeRequired).positive().integer(),
        nationality: yup.string().required(Configs.formMessage.nationalityRequired),
        agentSpecialties: yup.array().required(Configs.formMessage.specialtiesRequired),
    })
         const specialtiesOptions= specialties?.map(({id,name})=>{
             return {value:`/api/specialties/${id}` ,label:name}
         })

    const optionsPays =Pays.map(({nationalite})=> {
        return {value:nationalite,label:nationalite}
    })


    const {register,handleSubmit, setValue,  control, formState:{errors ,isSubmitSuccessful,
        isSubmitted, isSubmitting, isValid, } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),

             defaultValues : valueUpdate
        }
    )

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
            errors={errors.firstName?.message} type='text' name='firstName' placeholder='prénom'{...register('firstName')}
        />
        <FormInput
            errors={errors.lastName?.message} type='text' name='lastName' placeholder='Nom'{...register('lastName')}
        />
        <FormInput
            label=' Date de naissance' id='birthDate'
            errors={errors.birthDate?.message} type='date' name='birthDate'{...register('birthDate')}
        />
        <FormInput
            errors={errors.indentificationCode?.message} type='text' name='indentificationCode' placeholder="Code d'indentification "{...register('indentificationCode')}
        />
        <FormSelectInput
            name='nationality' label='Nationalité' id='nationality' errors={errors.nationality?.message}
            control={control}
            data={optionsPays}


        />
        <FormSelectInput
            name='agentSpecialties' label='Specialtiés' id='agentSpecialties' errors={errors.agentSpecialties?.message}
            control={control}
            data={specialtiesOptions}
            isMulti
            isLoading={isFetching}


        />

        <Button mt={3} disabled={isSubmitting} >{title}</Button>

    </form>
    )

}
export default FormAgent
FormAgent.defaultProps = {
    title: 'Ajouter',
    valueUpdate: '',
}