import React, { useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {Agents} from "../Func/apiUrl";
import {useOpenModal} from "../Context/OpenModalContext";



export default function useAgentsCRUD(){
    const queryCache = useQueryClient()



    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        Agents.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Agents')
        }
    })

    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
    }


    const handleModify =  (id)=>{
        if(id){

        }

        console.log(id)



    }
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
        handleModify,
        handleAdde,
        mutateAsyncDelete
    }
}