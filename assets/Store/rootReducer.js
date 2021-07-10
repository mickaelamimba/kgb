
import { missionSlice} from "./Mission/missionSlice";
import {combineReducers} from "redux";

import {agentsSlice} from "./Agents/agentsSlice";
import {specialtiesSlice} from "./Specialite/specialtieMission";

const rootReducer = combineReducers({
    mission : missionSlice.reducer,
    specialties : specialtiesSlice.reducer,
    agents: agentsSlice.reducer,

})

export default rootReducer