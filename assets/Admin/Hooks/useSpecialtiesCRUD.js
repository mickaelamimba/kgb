import {useMutation, useQuery, useQueryClient} from "react-query";
import { Specialties} from "../Func/apiUrl";
import {useState} from "react";
import {useOpenModal} from "../Context/OpenModalContext";



export default function useSpecialtiesCRUD(){
    const queryCache = useQueryClient()

    const {mutateAsync:mutateAsyncAdde,isError,isSuccess}= useMutation((payload)=>(
        Specialties.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Specialties')
        }
    })
    const modal = useOpenModal()
    const handleAdde= async(data)=>{
       await mutateAsyncAdde(data)
        modal.handleOpenModal()

    }

    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Specialties.update(payload)
    ),{
        onMutate:async (newSpecialties)=>{
            await queryCache.cancelQueries(['Specialties', newSpecialties.id])
            const previousSpecialties = queryCache.getQueryData(['Specialties', newSpecialties.id])
            queryCache.setQueryData(['Specialties', newSpecialties.id], newSpecialties)

            return { previousSpecialties, newSpecialties }

        },
        onError:(err, newSpecialties, context)=>{
            queryCache.setQueryData(['Specialties', context.newSpecialties.id],
                context.previousSpecialties)
        },
        onSettled: async(newSpecialties)=>{
            await queryCache.invalidateQueries(['Specialties', newSpecialties.id])
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Specialties'])
        }
    })



    const {mutateAsync:mutateAsyncDelete,isLoading:deleteLoad}= useMutation((id)=>(
        Specialties.deletes(id)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Specialties'])
        }
    })
    const handleDelete= async(id)=>{
      await  mutateAsyncDelete(id)
    }



    return{
        handleAdde,
        handleDelete,
        isError,
        isSuccess,
        mutateAsyncUpdate,
        isUpdate,
        mutateAsyncDelete,
        isUpdateSuccess,
        isUpdateError,

    }
}