import React, { useState} from "react";



import {useMutation, useQueryClient} from "react-query";
import { Stashs} from "../Func/apiUrl";



export default function useStashsCRUD(){

    const queryCache = useQueryClient()


    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        Stashs.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Stashs')
        }
    })

    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
    }
    const onSubmitUpdate =async (datas)=>{

        console.log('update:',datas)
    }

    const handleModify = async (id)=>{
         setOpenModalUpdate(true)

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




    return{
        handleAdde,
        handleModify,
        handleDelete,
        onSubmitUpdate,


    }
}