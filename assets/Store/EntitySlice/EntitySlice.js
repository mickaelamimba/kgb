import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomAxios} from "../../js/ApiUrl/CustomAxios";


export default({
    baseUrl,
    name,
})=>{
    const fetches = createAsyncThunk(
        `${name}/fetchStatus`,
        async(id)=>{
            const response = await CustomAxios.get(`${baseUrl}?page=${id}`)
            return await response.data

        }
    )
    const fetchById = createAsyncThunk(
        `${name}/fetchByIdStatus`,
        async(id)=>{
            const response = await CustomAxios.get(`${baseUrl}/${id}`)
            return await response.data
        }
    )
    const posts= createAsyncThunk(
        `${name}/postStatus`,

        async(payload,thunkAPI)=>{
                try {
                    const response = await CustomAxios.post(`${baseUrl}`,payload)
                    return await response.data
                    }catch(error){
                    return thunkAPI.rejectWithValue({ error: error.message });
                }




        }


    )
    const updates= createAsyncThunk(
        `${name}/updateStatus`,
        async(payload={id, data})=>{
                const response = await CustomAxios.put(`${baseUrl}/${payload.id}`,payload.data )
                return await response.data['hydra:member']

        }
    )
    const deletes = createAsyncThunk(
        `${name}/deleteStatus`,
        async(id)=>{
                const response = await CustomAxios.delete(`${baseUrl}/${id}`)
                return await response.data
        }
    )


    const Slice = createSlice({
      name,
      initialState:{
          entities:[],
          loading:'load',
          errors:''

      },
        reducers:{
       
        },
        extraReducers:{
          [fetchById.fulfilled]:(state,action)=>{
              state.entities[action.payload.id]= action.payload
          },
           [fetches.pending]:(state)=>{
               state.entities=[]
            },
          [fetches.fulfilled]:(state,action)=>{
              state.loading ='success'
             state.entities={
                 ...state.entities,
                 ...action.payload
             }
          },
          [posts.fulfilled]:(state,action)=>{


              state.entities['hydra:member']=[ ...state.entities['hydra:member'],
                  action.payload
              ]

          },
            [posts.rejected]:(state,action)=>{
                state.errors = action.error.message
            },
          [updates.fulfilled]:(state,action)=>{
              state.entities['hydra:member'].id = action.payload
          },
          [deletes.fulfilled]:(state, action)=>{
             state.entities['hydra:member']=[...state.entities['hydra:member'].filter(entity => entity.id !== action.meta.arg)]
          },
        }
    })

    return{
        reducer: Slice.reducer,
        fetches,
        fetchById,
        posts,
        updates,
        deletes,

    }
}

