import {useMutation, useQueryClient} from "react-query";
import {Missions} from "../Func/apiUrl";

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
    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Missions.update(payload)
    ),{
        onMutate:async (newMissions)=>{
            await queryCache.cancelQueries(['Missions', newMissions.id])
            const previousMissions = queryCache.getQueryData(['Missions', newMissions.id])
            queryCache.setQueryData(['Missions', newMissions.id], newMissions)
            return { previousMissions, newMissions }

        },
        onError:(err, newMissions, context)=>{
            queryCache.setQueryData(['Missions', context.newMissions.id],
                context.previousMissions)
        },
        onSettled: async(newMissions)=>{
            await queryCache.invalidateQueries(['Missions', newMissions.id])
            console.log(newMissions)
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Missions'])
        }
    })



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
        handleAdde,
        mutateAsyncUpdate,
        isUpdate,
        isUpdateSuccess,
        isUpdateError
    }

}

