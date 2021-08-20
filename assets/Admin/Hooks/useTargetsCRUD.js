import {useMutation, useQueryClient} from "react-query";
import {Specialties, Targets} from "../Func/apiUrl";
import {useOpenModal} from "../Context/OpenModalContext";

export default function useTargetsCRUD() {




    const queryCache = useQueryClient()



    const {mutateAsync:mutateAsyncAdde, isError,isSuccess}= useMutation((payload)=>(
        Targets.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Targets')
        }
    })
    const modal = useOpenModal()
    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
        modal.handleOpenModal()

    }

    const {mutateAsync:mutateAsyncDelete,isLoading:deleteLoad}= useMutation((id)=>(
        Targets.deletes(id)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Targets'])
        }
    })
    const handleDelete= async(id)=>{
        await  mutateAsyncDelete(id)
    }
    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Targets.update(payload)
    ),{
        onMutate:async (newTargets)=>{
            await queryCache.cancelQueries(['Targets', newTargets.id])
            const previousTargets = queryCache.getQueryData(['Targets', newTargets.id])
            queryCache.setQueryData(['Stashs', newTargets.id], newTargets)

            return { previousTargets, newTargets }

        },
        onError:(err, newTargets, context)=>{
            queryCache.setQueryData(['Targets', context.newTargets.id],
                context.previousStashs)
        },
        onSettled: async(newTargets)=>{
            await queryCache.invalidateQueries(['Targets', newTargets.id])
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Targets'])
        }
    })



    return {
        handleDelete,
        handleAdde,
        isError,
        isSuccess,
        mutateAsyncUpdate,
        isUpdate,
        isUpdateSuccess,
        isUpdateError,
    }

}
