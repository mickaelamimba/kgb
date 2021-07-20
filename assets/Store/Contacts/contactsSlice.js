import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";
import {updateAgent} from "../Agents/agentsSlice";


const deleteContact = createAsyncThunk(
    'delete/contact',
    async(id)=>{
        try {

            const response = await CustomAxios.delete(`api/contacts/${id}`)
            return await response.data
        }catch(e){
            e.message
        }
    }
)
const fetchContacts = createAsyncThunk(
    'fetch/contact',
    async(id)=>{
        try {

            const response = await CustomAxios.get(`api/contacts?page=${id}`)
            return await response.data
        }catch(e){
            e.message
        }
    }
)

const updateContact= createAsyncThunk(
    'update/contact',
    async(id,payload)=>{
        try {
            const response = await CustomAxios.put(`api/contacts/${id}`,payload )
            return await response.data['hydra:member']
        }catch(e){e.message}
    }
)

const postNewContact= createAsyncThunk(
    'post/newContact',
    async(payload)=>{
        try {

            const response = await CustomAxios.post('api/contacts',payload)

            return await response.data
        }catch(e){

            return  e.message
        }
    }


)

const contactsSlice  = createSlice({
    name: 'contact',
    initialState :{
        isLoading: 'load',
        contacts:[],
        filter:[],
        error:'',
    },
    reducers :{
        filterContact(state,action){
            return{
                ...state,
                filter:[...state.contacts['hydra:member'].filter(contact => contact.id === action.payload)]
            }
        },
        removeContact(state,action){
            return {
                ...state,
                contacts:[
                    ...state.contacts['hydra:member'].filter(contact => contact.id !== action.payload)]
            }
        },
        extraReducers:{
            [fetchContacts.fulfilled]:(state,action)=>{
                state.isLoading = 'success'
                state.contacts =action.payload
            },
            [updateContact.fulfilled]:(state,action)=>{
                    state.contacts['hydra:member']=[...state.agents['hydra:member'] ,action.payload]
            },
            [postNewContact.fulfilled]:(state,action)=>{
                state.contacts['hydra:member']=[...state.contacts['hydra:member'] ,action.payload]
            },
            [deleteContact.fulfilled]:(state,action)=>{

            }
        }
    },
})


export const{filterContact,removeContact}=contactsSlice.actions
export{
    fetchContacts,updateContact,postNewContact,deleteContact,contactsSlice
}