
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";



export default({ baseUrl})=>{

    const oneById = async (id)=>{
        const response = await CustomAxios.get(`${baseUrl}/${id}`)
        return await response.data

    }
    const orderBy = async (order)=>{
        const response = await CustomAxios.get(`${order}`)
        return data

    }
    const fetchAll = async() =>{
        const response = await CustomAxios.get(`${baseUrl}`)
        return  await response.data

    }

    const post = async (payload)=>{
        const response = await CustomAxios.post(`${baseUrl}`,payload)
        return await response.data
    }

    const update = async (payload)=>{
        const {id, data}=payload
        const response = await CustomAxios.put(`${baseUrl}/${id}`,data )
        return await response.data
    }
    const deletes =(id)=>{
       return CustomAxios.delete(`${baseUrl}/${id}`).then(res => res.data['hydra:member'])

    }


    return{

        oneById ,
        fetchAll,
        post,
        update,
        deletes
    }
}