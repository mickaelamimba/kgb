import {useMutation, useQueryClient} from "react-query";
import { Targets} from "../Func/apiUrl";
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


    const handleModify =  (id)=>{
        if(id){

        }

        console.log(id)



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



    return {
        handleDelete,
        handleModify,
        handleAdde,
        isError,
        isSuccess
    }

}
