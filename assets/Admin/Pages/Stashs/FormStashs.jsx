import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import React from "react";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import Pays from "../../Nationality/Nationality";
import {Button} from "theme-ui";

import DisplayValidRequest from "../../Componets/UI/DisplayMessage/DisplayValidRequest";
import Configs from "../../Config/Config.json";
import DisplayError from "../../Componets/UI/DisplayMessage/DisplayError";
import useStashsCRUD from "../../Hooks/useStashsCRUD";


const  FormStashs =({title,onSubmit, valueUpdate})=>{

    const schema = yup.object().shape({
        code:yup.number().required().positive().integer(),
        address: yup.string().required(Configs.formMessage.addressRequired),
        country:yup.string().required(Configs.formMessage.countryRequired),
        type:yup.string().required()

    })
    const {register,handleSubmit,control, formState:{errors , isSubmitting } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),

            defaultValues : valueUpdate
        }
    )
    const optionsPays =Pays.map(({libelle})=> {
        return {value:libelle,label:libelle}
    })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <FormInput
                errors={errors.code?.message} type='number' name='code' placeholder='Code'{...register('code')}
            />
            <FormInput
                errors={errors.address?.message} type='text' name='code' placeholder='Adrese'{...register('address')}
            />
            <FormSelectInput
                name='country'
                label='Pays'
                id='country'
                control={control}
                errors={errors.country?.message}
                data={optionsPays}

            />
            <FormInput
                errors={errors.type?.message} type='text' name='type' placeholder='Type'{...register('type')}
            />
            <Button mt={3} disabled={isSubmitting} >{title}</Button>
        </form>
    )

}
export default FormStashs
FormStashs.defaultProps = {
    title: 'Ajouter',
    valueUpdate: '',
}