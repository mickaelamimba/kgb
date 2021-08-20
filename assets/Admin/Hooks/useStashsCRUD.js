import React, { useState} from "react";



import {useMutation, useQueryClient} from "react-query";
import { Stashs} from "../Func/apiUrl";



export default function useStashsCRUD(){

    const queryCache = useQueryClient()


    const {mutateAsync:mutateAsyncAdde,isError,isSuccess}= useMutation((payload)=>(
        Stashs.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Stashs')
        }
    })

    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
    }




    const {mutateAsync:mutateAsyncDelete,isLoading:deleteLoad}= useMutation((id)=>(
        Stashs.deletes(id)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Stashs'])
        }
    })
    const handleDelete= async(id)=>{
        await  mutateAsyncDelete(id)
    }
    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Stashs.update(payload)
    ),{
        onMutate:async (newStashs)=>{
            await queryCache.cancelQueries(['Stashs', newStashs.id])
            const previousStashs = queryCache.getQueryData(['Stashs', newStashs.id])
            queryCache.setQueryData(['Stashs', newStashs.id], newStashs)

            return { previousStashs, newStashs }

        },
        onError:(err, newStashs, context)=>{
            queryCache.setQueryData(['Stashs', context.newStashs.id],
                context.previousStashs)
        },
        onSettled: async(newStashs)=>{
            await queryCache.invalidateQueries(['Stashs', newStashs.id])
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Stashs'])
        }
    })




    return{
        handleAdde,
        handleDelete,
        isError,
        isSuccess,
        mutateAsyncUpdate,
        isUpdate,
        isUpdateSuccess,
        isUpdateError,


    }
}