import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";


const fetchSpecialtieMission = createAsyncThunk(
    'specialtieMission/fetch',
    async (specialtie)=>{

        const response = await CustomAxios.get(`${specialtie}`)
        return await response.data
    }
)

const specialtieSlice = createSlice({
    name:'specialties',
    initialState:{
        specialtie :[]
    },
    reducers :{},
    extraReducers:{
        [fetchSpecialtieMission.fulfilled]:(state,action)=>{

            state.specialtie.push(...state.specialtie,action.payload)

}
    }
}

)
export {specialtieSlice,fetchSpecialtieMission}