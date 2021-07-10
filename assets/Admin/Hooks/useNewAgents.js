import React, { useState} from "react";
import {postNewAgents, updateAgent} from "../../Store/Agents/agentsSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchMission} from "../../Store/Mission/missionSlice";




export default function useNewAgents(){
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [indentificationCode, setIndentificationCode] = useState('')
    const [nationality, setNationality] = useState('')
    const [mission, setMission] = useState('')
    const dispatch = useDispatch()
    const missions =  useSelector(state => state.mission.missionEntities )
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
        dispatch( fetchMission())

    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleUpdate =()=>{
        dispatch(updateAgent(id,{
            firstName:firstName,
            lastName: lastName,
            birthDate: birthDate,
            indentificationCode: indentificationCode,
            nationality: nationality,
            missions:mission
        }))
    }


    const handleSubmitNewAgent=()=>{
        if(lastName && firstName && birthDate){
            dispatch(postNewAgents({
                firstName:firstName,
                lastName: lastName,
                birthDate: birthDate,
                indentificationCode: indentificationCode,
                nationality: nationality,
                missions:mission
            }))
        }
    }

   const  formAgentInput=[
       {
           format:'input',
           value: lastName,
           name:"lastName",
           onChange: e => setLastName(e.target.value),
           placeholder :'Nom',
           type: 'text'
       }, {
           format:'input',
           value: firstName,
           name:"firstName",
           onChange: e => setFirstName(e.target.value),
           placeholder :'Prenom',
           type: 'text'
       },{
           format:'date',
           value: birthDate,
           name:"birth_date",
           onChange: e => setBirthDate(e.target.value),
           label :'date de naisence',
           type: 'date'
       },{
           format:'input',
           value: indentificationCode,
           name:"indentification_code",
           onChange: e => setIndentificationCode(e.target.value),
           placeholder :'Code d\'idetification',
           type: 'text'
       },{
           format:'input',
           value: nationality,
           name:"nationality",
           onChange: e => setNationality(e.target.value),
           placeholder :'Nationaliter',
           type: 'text'
       },
       {
           format:'select',
           value: mission,
           name:"specialtie",
           onChange: e => setMission(e.target.value),
           options :missions,

       },
   ]

    return {formAgentInput,handleSubmitNewAgent,handleOpen,handleClose,open }
}