import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";


const fetchSpecialties = createAsyncThunk(
    'specialties/fetch',
    async ()=>{

        const response = await CustomAxios.get(`api/specialties`)
        return await response.data['hydra:member']
    }
)
const postSpecialties= createAsyncThunk(
    'post/newSpecialties',
    async(payload)=>{
        try {
            console.log(payload)
            const response = await CustomAxios.post('api/specialties',payload)

            return await response.data
        }catch(e){

            return  e.message
        }
    }


)

const specialtiesSlice = createSlice({
    name:'specialties',
    initialState:{
        specialties :[]
    },
    reducers :{},
    extraReducers:{
        [fetchSpecialties.fulfilled]:(state,action)=>{
            state.specialties=action.payload}
    }
}

)
export {fetchSpecialties,specialtiesSlice }