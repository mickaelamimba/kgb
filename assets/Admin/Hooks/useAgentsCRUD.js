import React from "react";
import {useMutation, useQueryClient} from "react-query";
import {Agents} from "../Func/apiUrl";




export default function useAgentsCRUD(){
    const queryCache = useQueryClient()



    const {mutateAsync:mutateAsyncAdde,isSuccess,isError}= useMutation((payload)=>(
        Agents.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Agents')
        }
    })

    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
    }
    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Agents.update(payload)
    ),{
        onMutate:async (newAgents)=>{
            await queryCache.cancelQueries(['Agents', newAgents.id])
            const previousAgents = queryCache.getQueryData(['Agents', newAgents.id])
            queryCache.setQueryData(['Agents', newAgents.id], newAgents)
            return { previousAgents, newAgents }

        },
        onError:(err, newAgents, context)=>{
            queryCache.setQueryData(['Agents', context.newAgents.id],
                context.previousAgents)
        },
        onSettled: async(newAgents)=>{
            await queryCache.invalidateQueries(['Agents', newAgents.id])
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Agents'])
        }
    })


    const {mutateAsync:mutateAsyncDelete,isLoading:deleteLoad}= useMutation((id)=>(
        Agents.deletes(id)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Agents'])
        }
    })
    const handleDelete= async(id)=>{
        await  mutateAsyncDelete(id)

    }



    return {
        handleDelete,
        handleAdde,
        mutateAsyncDelete,
        mutateAsyncUpdate,
        isUpdate,
        isUpdateSuccess,
        isUpdateError,
        isError,
        isSuccess
    }
}