import {useMutation, useQueryClient} from "react-query";
import { Missions} from "../Func/apiUrl";

export default function useMissionsCRUD() {




    const queryCache = useQueryClient()



    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        Missions.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Missions')
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
        Missions.deletes(id)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Missions'])
        }
    })
    const handleDelete= async(id)=>{
        await  mutateAsyncDelete(id)
    }



    return {
        handleDelete,
        handleModify,
        handleAdde
    }

}

