import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { CustomAxios} from "../../js/ApiUrl/CustomAxios";

const deleteAgent = createAsyncThunk(
    'delete/agents',
    async(id)=>{
        try {

            const response = await CustomAxios.delete(`api/agents/${id}`)
            return await response.data
        }catch(e){
            e.message
        }
    }
)
const fetchAgent = createAsyncThunk(
    'fetch/agents',
    async(id)=>{
        try {

            const response = await CustomAxios.get(`api/agents?page=${id}`)
            return await response.data
        }catch(e){
            e.message
        }
    }
)

const updateAgent= createAsyncThunk(
    'update/agent',
    async(id,payload)=>{
        try {
            const response = await CustomAxios.put(`api/agents/${id}`,payload )
            return await response.data['hydra:member']
            }catch(e){e.message}
    }
)

const postNewAgents= createAsyncThunk(
    'post/newAgents',
    async(payload)=>{
        try {

            const response = await CustomAxios.post('api/agents',payload)

            return await response.data
            }catch(e){

            return  e.message
        }
    }


)


const agentsSlice  = createSlice({
    name: 'agents',
    initialState :{
        isLoading: 'load',
        agents:[],
        error:'',
    },
    reducers :{

    },
    extraReducers:{
        [updateAgent.fulfilled]:(state,action)=>{
            state.agents=[...state.agents ,action.payload]
        },
        [deleteAgent.fulfilled]:(state, action)=>{
            state.agents.splice(action.payload,1)
        },
        [fetchAgent.pending]:(state)=>{
            state.isLoading = 'load'
            state.agents  =[]
            state.error =''
        },
        [fetchAgent.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.isLoading = 'success'
            state.agents =action.payload
        },
        [postNewAgents.fulfilled]:(state,action)=>{
            state.agents=[...state.agents ,action.payload]
        }
    }
})

export{postNewAgents, agentsSlice,fetchAgent,deleteAgent,updateAgent}