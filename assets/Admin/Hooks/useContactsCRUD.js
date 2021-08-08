
import {Contacts} from "../Func/apiUrl";
import {useMutation, useQueryClient} from "react-query";


export default function useContactsCRUD(options){
    const queryCache = useQueryClient()

    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        Contacts.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries('Contacts')
        }
    })

    const handleAdde = async(data)=>{

       await mutateAsyncAdde( data)



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
    const handleModify =()=>{

    }




    return{
        handleAdde,
        handleDelete,
        handleModify,


    }
}
