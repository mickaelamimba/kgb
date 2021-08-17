import {useMutation, useQueryClient} from "react-query";

const queryCache = useQueryClient()
export default({name,func})=>{

    const {mutateAsync:mutateAsyncAdde}= useMutation((payload)=>(
        func.post(payload)
    ),{
        onSuccess: async()=>{
            await queryCache.invalidateQueries(name)
        }
    })

    const handleAdde= async(data)=>{
        await mutateAsyncAdde(data)
    }

    return{
        handleAdde
    }
}