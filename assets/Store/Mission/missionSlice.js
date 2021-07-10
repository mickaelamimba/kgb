const {CustomAxios} = require("../../js/ApiUrl/CustomAxios");
const {createSlice,createAsyncThunk} = require("@reduxjs/toolkit");

const fetchMission = createAsyncThunk(
    'mission/fetch',
    async (id =null)=>{
                try {
                    if(id){
                        let data = []
                        const response = await CustomAxios.get(`api${id}`)
                        data.push(response.data)
                        return data;
                    }
                    const response = await CustomAxios.get('api/missions')

                    return await response.data['hydra:member']
                }catch (err) {
                   return err.message
                }


    }
)
const postNewMission = createAsyncThunk(
    'post/newMission',
    async(payload)=>{
        try {
            const response = await CustomAxios.post('api/missions',payload)
            return await response.data
        }catch (err){
            return err.message
        }

    }
)


const missionSlice  = createSlice({
    name: 'mission',
    initialState :{
        isLoading: 'load',
        missionEntities :[],
        missionOneById :[],
        error :''
    },
    reducers :{

    },
    extraReducers:{
        [fetchMission.pending]:(state)=>{
            state.isLoading = 'load'
            state.missionEntities =[]
            state.missionOneById =[]
             state.error =''
        },
        [fetchMission.fulfilled]:(state,action)=>{
            state.isLoading = 'success'
            state.missionEntities= action.payload
            if(action.meta.arg){
                state.missionOneById = action.payload
            }


        },
        [fetchMission.rejected]:(state,{payload})=>{
            state.isLoading = 'errors'
            state.missionOneById =[]
            state.missionEntities =[]
            state.errors = payload.error.message
        },
        [postNewMission.fulfilled]:(state,action)=>{
            state.missionEntities=[...state.missionEntities, action.payload]
        }

    }
    }

)



export{ missionSlice, fetchMission,postNewMission }