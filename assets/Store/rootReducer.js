
import { missionSlice} from "./Mission/missionSlice";
import {combineReducers} from "redux";

import {agentsSlice} from "./Agents/agentsSlice";
import {specialtiesSlice} from "./Specialite/specialtieMission";
import {contactsSlice} from "./Contacts/contactsSlice";


const rootReducer = combineReducers({
    mission : missionSlice.reducer,
    specialties : specialtiesSlice.reducer,
    agents: agentsSlice.reducer,
    contacts: contactsSlice.reducer,


})

export default rootReducer