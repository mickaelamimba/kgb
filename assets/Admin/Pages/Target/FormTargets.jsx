import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Flex} from "theme-ui";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import Pays from "../../Nationality/Nationality";
import React from "react";
import Configs from "../../Config/Config.json";

const FormTargets =()=>{
    const schema  =yup.object().shape({
        firstName: yup.string().required(Configs.formMessage.firstNameRequired),
        lastName: yup.string().required(Configs.formMessage.lastNameRequired),
        birthDate : yup.date().max(new Date(), Configs.formMessage.birthDateRequired),
        codeName: yup.string().required(Configs.formMessage.codeNameRequired),
        nationality: yup.string().required(Configs.formMessage.nationalityRequired),

    })

    const {register,handleSubmit, formState:{errors,isSubmitting, } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),}
    )


    return(
        <form onSubmit={handleSubmit(onSubmit)}>

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
        </form>)
}
export default FormTargets