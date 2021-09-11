
import {Contacts} from "../Func/apiUrl";
import {useMutation, useQueryClient} from "react-query";
import {useOpenModal} from "../Context/OpenModalContext";


export default function useContactsCRUD(){
    const modal =useOpenModal()
    const queryCache = useQueryClient()

    const {mutateAsync:mutateAsyncAdde,isError,isSuccess}= useMutation((payload)=>(
        Contacts.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Contacts')
        }
    })

    const handleAdde = async(data)=>{

       await mutateAsyncAdde( data)
        modal.handleOpenModal()



   }

    const {mutateAsync:mutateAsyncDelete}= useMutation((id)=>(
        Contacts.deletes(id)
    ),{
        onSuccess: async()=>{
           await queryCache.invalidateQueries('Contacts')
        }
    })
  const  handleDelete = async(i)=>{

    await  mutateAsyncDelete(i)


  }

    const {mutateAsync:mutateAsyncUpdate,isLoading:isUpdate, isSuccess:isUpdateSuccess, isError:isUpdateError}= useMutation(((payload)=> Contacts.update(payload)
    ),{
        onMutate:async (newContacts)=>{
            await queryCache.cancelQueries(['Contacts', newContacts.id])
            const previousContacts = queryCache.getQueryData(['Contacts', newContacts.id])
            queryCache.setQueryData(['Contacts', newContacts.id], newContacts)

            return { previousContacts, newContacts }

        },
        onError:(err, newContacts, context)=>{
            queryCache.setQueryData(['Contacts', context.newContacts.id],
                context.previousContacts)
        },
        onSettled: async(newContacts)=>{
            await queryCache.invalidateQueries(['Contacts', newContacts.id])
        }
        ,
        onSuccess: async()=>{
            await queryCache.invalidateQueries(['Contacts'])
        }
    })





    return{
        handleAdde,
        handleDelete,
        mutateAsyncUpdate,
        isUpdate,
        isUpdateSuccess,
        isUpdateError,
        isError,
        isSuccess


    }
}
