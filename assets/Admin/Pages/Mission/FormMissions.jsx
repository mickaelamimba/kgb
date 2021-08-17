
import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Button} from "theme-ui";
import * as yup from "yup";
import Pays from "../../Nationality/Nationality";
import FormInput from "../../Componets/UI/FormBox/FormInput";
import { useQuery} from "react-query";
import {Agents, Contacts, Targets, Stashs, Specialties} from "../../Func/apiUrl";
import FormSelectInput from "../../Componets/UI/FormBox/FormSelectInput";
import FormTextarea from "../../Componets/UI/FormBox/FormTextarea";
import Configs from "../../Config/Config.json";




const FormMissions =({title,onSubmit,defaultData})=>{

    yup.addMethod(yup.mixed, 'targetsVerify',function(messages,id){
        return this.test('targetsVerify',messages, function(value){
            let errors
            value.map((v)=>{
                if(v === id || v !== id){
                    return errors= this.createError({
                        message:messages
                    })
                }

            })
            return errors
        })

    })
    yup.addMethod(yup.mixed, 'contactVerify',function(messages,id){
        return this.test('contactVerify',messages, function(value){
            let errors
            value.map((v)=>{
                if(v === id){
                    return errors= this.createError({
                        message:messages
                    })
                }

            })
            return errors
        })

    })
    const schema  =yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        codeName: yup.string().required(),
        country: yup.string()
            .required(Configs.formMessage.countryRequired),
        missionType: yup.string().required(),
        status: yup.string().required(),
        specialties:  yup.string().required(),
        agents: yup.array().when('specialties',(specialties,schema,agents)=>{
            if(specialties&&agents){
                let errors = yup.array().required('veuillez selectioner vos agents')
            agentsData?.map(({id,agentSpecialties})=>{
               let agentsId =`/api/agents/${id}`
                    agents.value.map((val)=>{
                        if(val === agentsId){
                            agentSpecialties.map((specialty)=>{
                                let specialtyId =`/api/specialties/${specialty.id}`
                                if(specialtyId === specialties){


                                }


                            })

                        }
                    })




            return errors
            })


            }
        }).required(),
        contacts :yup.array().when('country',(country,schema,contacts)=>{
            
            if(country && contacts){
                let errors = yup.array().required('veuillez selectioner vos contacts')
                Pays.map((paysItem)=>{
                    if(paysItem.libelle === country){
                        contactsData?.map(({id,nationality})=>{
                            let contactsId =`/api/contacts/${id}`
                            if(contacts.value){
                                contacts.value.map((valueId)=>{
                                    if(valueId === contactsId && nationality!== paysItem.nationalite ) {
                                            return errors = yup.array().of(yup.string()).contactVerify('les contacts sont obligatoirement de la nationalité du pays de la mission',contactsId)

                                    }
                                })
                            }

                        })
                    }
                })

                return errors
            }


        }).required(),
        stashs: yup.string().when('country',(country,schema,stashs)=>{
            if(country&& stashs){

                let errors
                stahsData?.map((stahs)=>{
                    if(stahs.country !== country){
                     return errors= yup.string().test('stashs',' la planque est obligatoirement dans le même pays que la mission.',vale => vale !== `api/stashs/${stahs.id}` )
                    }
                })
                return errors
            }
        }).required(),
        targets:yup.array().when('agents',(agents,schema,targets)=>{
            if(agents && targets){
             let errors 
                agentsData?.map((agent)=>{
                    let agentId = `/api/agents/${agent.id}`
                    agents.map((agentSelectedId)=>{
                        if(agentId === agentSelectedId){
                            targetsData?.map((target)=>{
                                if(target.nationality === agent.nationality){
                                    let targetId =`/api/targets/${target.id}`

                                    return errors = yup.array().of(yup.string()).targetsVerify('la ou les cibles ne peuvent pas avoir la même nationalité que le ou les agents',targetId)
                                }

                            })

                        }
                    })

                })
                return errors

            }
        }).required(),
        startDate: yup.date().required(),
        endDate: yup.date().required(),
    })




    const {data:SpecialtiesData}= useQuery('Specialties',Specialties.fetchAll,)
    const specialtiesOptions =  SpecialtiesData?.map(({id,name})=>{
        return { value:`/api/specialties/${id}`, label:`${name}`}
    })
    const {data:stahsData}= useQuery('Stashs',Stashs.fetchAll,)
    const stahsOptions =  stahsData?.map(({id,code})=>{
        return { value:`/api/stashs/${id}`, label:code}
    })
    const {data:targetsData}= useQuery('Targets',Targets.fetchAll,)
    const targetsOptions =  targetsData?.map(({id,firstName, lastName})=>{
        return { value:`/api/targets/${id}`, label: `${firstName} ${lastName}` }
    })
    const {data:contactsData}= useQuery('Contacts',Contacts.fetchAll,)
    const contactsOptions =  contactsData?.map(({id,firstName, lastName,nationality})=>{
        return { value:`/api/contacts/${id}`, label:`${firstName} ${lastName} - ${nationality}`}
    })
    const {data:agentsData,isFetching:agentFetching}= useQuery('Agents',Agents.fetchAll,)
    const agentsOptions =  agentsData?.map(({id,firstName, lastName})=>{
     return { value:`/api/agents/${id}`, label:`${firstName} ${lastName} `}
 })
  const statusOptions =Configs.table.status
    const missionTypeOptions =Configs.table.missionType
    const optionsPays =Pays.map(({libelle})=> {
     return {value:libelle,label:libelle}
})

    const {control, register,handleSubmit, formState:{errors} }=useForm(
        {
            resolver: yupResolver(schema),
            mode:'onTouched',
            defaultValues:defaultData
        }
    )




    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                errors={errors.title?.message} type='text' name='title' placeholder='Titre'{...register('title')}
            />


            <FormTextarea
                errors={errors.description?.message} type='text' name='description' rows={8} placeholder='description'{...register('description')}
            />
            <FormInput
                errors={errors.codeName?.message} type='text' name='codeName' placeholder='Nom de code'{...register('codeName')}
            />
            <FormSelectInput
                name='country' label='Pays' id='county' errors={errors.country?.message}
                control={control}
                data={optionsPays}
            />
            <FormSelectInput
                name='missionType' label='Type de mission' id='missionType' errors={errors.missionType?.message}
                control={control}
                data={missionTypeOptions}

            />

            <FormSelectInput
                name='agents' label='Agents' id='agents' errors={errors.agents?.message}
                control={control}
                data={agentsOptions}
                isMulti
                isLoading={agentFetching}

            />

            <FormSelectInput
                name='contacts' label='Contacts' id='contacts' errors={errors.contacts?.message}
                control={control}
                data={contactsOptions}
                isMulti

            />
            <FormSelectInput
                name='targets' label='Cibles' id='targets' errors={errors.targets?.message}
                control={control}
                data={targetsOptions}
                isMulti

            />
            <FormSelectInput
                name='stashs' label='Planque' id='stashs' errors={errors.stashs?.message}
                control={control}
                data={stahsOptions }


            />
            <FormSelectInput
                name='specialties' label='Specialtié' id='specialties' errors={errors.specialties?.message}
                control={control}
                data={specialtiesOptions}


            />
            <FormSelectInput
                name='status' label='Status' id='status' errors={errors.status?.message}
                control={control}
                data={statusOptions}


            />
            <FormInput
                label='Date de début' id='startDate'
                errors={errors.startDate?.message} type='date' name='startDate' {...register('startDate')}
            />
            <FormInput
                label='Date de fin' id='endDate'
                errors={errors.endDate?.message} type='date' name='endDate' {...register('endDate')}
            />



            <Button>{title}</Button>
        </form>
    )
}
export default FormMissions
FormMissions.defaultProps = {
    title: 'Ajouter',
    defaultData:''
}

FormMissions.propTypes ={
    title : PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired,
    //defaultData : PropTypes.object

}