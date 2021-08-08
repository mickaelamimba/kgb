import {useMutation, useQuery, useQueryClient} from "react-query";
import { Specialties} from "../Func/apiUrl";
import {useState} from "react";



export default function useSpecialtiesCRUD(){
    const queryCache = useQueryClient()

    const[updateId, setUpdateId]= useState(null)
    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        Specialties.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Specialties')
        }
    })

    const handleAdde= async(data)=>{
       await mutateAsyncAdde(data)
    }


    const handleModify =  (id)=>{
        if(id){

        }

        console.log(id)

        setUpdateId(id)

    }
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
        handleModify,
        handleDelete,
        deleteLoad,
        updateId

    }
}