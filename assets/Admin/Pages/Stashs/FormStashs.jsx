import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import React from "react";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import Pays from "../../Nationality/Nationality";
import {Button, Spinner} from "theme-ui";

import DisplayValidRequest from "../../Componets/UI/DisplayMessage/DisplayValidRequest";
import Configs from "../../Config/Config.json";
import DisplayError from "../../Componets/UI/DisplayMessage/DisplayError";
import useStashsCRUD from "../../Hooks/useStashsCRUD";


const  FormStashs =({title,onSubmit, valueUpdate})=>{
    const {errorFetch,isLoading}= useStashsCRUD()
    const schema  =yup.object().shape({
        code:yup.number().required().positive().integer(),
        address: yup.string().required(Configs.formMessage.addressRequired),
        country:yup.string().required(Configs.formMessage.countryRequired),
        type:yup.string().required()

    })
    const {register,handleSubmit, setValue , formState:{errors ,isSubmitSuccessful,
        isSubmitted, isSubmitting, isValid, } }=useForm(

        {
            mode:'onTouched',
            resolver: yupResolver(schema),

            defaultValues : valueUpdate
        }
    )
    const displaySumitEvent =  ()=>{

        if (isSubmitted) {
            if( isLoading){
                if ( isSubmitSuccessful) {
                    return <DisplayValidRequest message={Configs.submitSuccess.success}/>
                } else if ( isSubmitted  && errorFetch) {
                    return <DisplayError message={Configs.submitErrors.error}/>
                }
            }

        }


    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {displaySumitEvent()}
            <FormInput
                errors={errors.code?.message} type='number' name='code' placeholder='Code'{...register('code')}
            />
            <FormInput
                errors={errors.address?.message} type='text' name='code' placeholder='Adrese'{...register('address')}
            />
            <FormSelectInput
                label='Pays'
                id='country'
                errors={errors.country?.message}
                {...register('country')}
                options={Pays.map(pay => <option key={pay.id} value={pay.libelle}> {pay.libelle}</option>)}

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