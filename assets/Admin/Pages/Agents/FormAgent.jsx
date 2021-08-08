import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import React from "react";
import Pays from "../../Nationality/Nationality";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import {Button,Switch} from "theme-ui";
import {useQuery} from "react-query";
import {Specialties} from "../../Func/apiUrl";


const FormAgent =({title,onSubmit, valueUpdate})=>{

    const {data:specialties}= useQuery('Specialties',  ()=>Specialties.fetchAll())
    const schema  =yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        birthDate : yup.date().required(),
        indentificationCode: yup.number().required().positive().integer(),
        nationality: yup.string().required(),
        agentSpecialties: yup.array().required(),
    })



    const {register,handleSubmit, setValue , formState:{errors ,isSubmitSuccessful,
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
            label='Nationalité'
            id='nationality'
            errors={errors.nationality?.message}
            {...register('nationality')}
            options={Pays.map(pay => <option key={pay.id} value={pay.nationalite}> {pay.nationalite}</option>)}

        />
        {specialties?.map((specialtie)=>{

          return  <Switch key={specialtie.id}
                          {...register('agentSpecialties')}
                          value={`/api/specialties/${specialtie.id}`} label={specialtie.name}/>
        })

        }

        <Button mt={3} disabled={isSubmitting} >{title}</Button>

    </form>
    )

}
export default FormAgent
FormAgent.defaultProps = {
    title: 'Ajouter',
    valueUpdate: '',
}