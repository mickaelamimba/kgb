
import {missionIdSlice, missionSlice} from "./Mission/missionSlice";
import {combineReducers} from "redux";
import {specialtieSlice} from "./Mission/specialtieMission";

const rootReducer = combineReducers({
    mission : missionSlice.reducer,
    specialtie : specialtieSlice.reducer,

})

export default rootReducer