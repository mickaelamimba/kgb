

import {combineReducers} from "redux";

import {Agents, Contacts, Missions, Specialties, Stashs, Targets} from "./EntitySlice/EntityUrl";



const rootReducer = combineReducers({
    missions : Missions.reducer,
    specialties : Specialties.reducer,
    contacts: Contacts.reducer,
    agents: Agents.reducer,
    targets: Targets.reducer,
    stashs :Stashs.reducer



})

export default rootReducer