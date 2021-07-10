import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";


const fetchSpecialties = createAsyncThunk(
    'specialties/fetch',
    async ()=>{

        const response = await CustomAxios.get(`api/specialties`)
        return await response.data['hydra:member']
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

            state.specialties=action.payload

}
    }
}

)
export {fetchSpecialties,specialtiesSlice }