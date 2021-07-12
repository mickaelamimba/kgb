import React, {useEffect, useState} from "react";
import {deleteAgent, fetchAgent, filterAgents, postNewAgents, updateAgent} from "../../Store/Agents/agentsSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchMission} from "../../Store/Mission/missionSlice";
import {fetchSpecialties} from "../../Store/Specialite/specialtieMission";
import {useHistory, useParams} from "react-router-dom";




export default function useNewAgents(){
    let match = useParams()

    const history=useHistory()
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [indentificationCode, setIndentificationCode] = useState('')
    const [nationality, setNationality] = useState('')
    const [mission, setMission] = useState('')
    const [checkSpecialtie, setCheckSpecialtie] = useState(true)
    const [specialtiesId, setSpecialtiesId] =useState([])

    const [modifyId, setModifyId] =useState(0)
    const dispatch = useDispatch()
    const missions =  useSelector(state => state.mission.missionEntities )
    const specialties =  useSelector(state => state.specialties.specialties )

    const [open, setOpen] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)
    const agentsListe =  useSelector(state => state.agents.agents['hydra:member'] )
    const totalItem =useSelector(state => state.agents.agents['hydra:totalItems'] )
    const isLoading = useSelector(state => state.agents.isLoading )
    const filters = useSelector( state => state.agents.filter)
    console.log(filters)
    const totalPages =  Math.ceil( totalItem / 13)

    let [page , setPage]= useState(1)
    const changePage =({selected})=>{

        setPage(selected)
        history.push(`/Admin/agents/${selected}`)
        dispatch(fetchAgent(selected))
    }

   function handleSubmit(e){
        dispatch(deleteAgent(e))

    }
    useEffect(() =>{
        dispatch(fetchAgent(match.id))
    },[match.id,dispatch])
    const handleOpen = () => {
       !open ? setOpen(true) :!updateOpen ?setUpdateOpen(true): null
        dispatch( fetchMission())
        dispatch(fetchSpecialties())

    };
    const handleClose = () => {
        open ? setOpen(false) :updateOpen ?setUpdateOpen(false): null
        if(open){
            setLastName('')
            setFirstName('')
            setBirthDate('')
            setIndentificationCode('')
            setNationality('')
        }
    };
    const handleCheckInput =(e)=>{
     let  id = e.target.id
        setSpecialtiesId([...specialtiesId, id])
        console.log(setSpecialtiesId)
        setCheckSpecialtie(!checkSpecialtie)
    }
    const handleModifie =(e)=>{
        dispatch(filterAgents(e))

        if(filters){
            filters.map(({lastName,firstName,birthDate,indentificationCode,nationality})=>{
                setLastName(lastName)
                setFirstName(firstName)
                setBirthDate(birthDate)
                setIndentificationCode(indentificationCode)
                setNationality(nationality)
            })
            dispatch( fetchMission())
            dispatch(fetchSpecialties())
        }
        setModifyId(e)
        setUpdateOpen(true)
        history.push(`/Admin/agents/${match.id}/modify/${e}`)
        

    }
    const handleUpdate =()=>{

        dispatch(updateAgent(modifyId,{
            firstName:firstName,
            lastName: lastName,
            birthDate: birthDate,
            indentificationCode: indentificationCode,
            nationality: nationality,
            missions:mission,
            specialties:[]
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
                missions:mission,
                specialties:specialtiesId
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
           name:"Mission",
           onChange: e => setMission(e.target.value),
           options :missions,

       },
       {
           format: 'checked',
           value: checkSpecialtie,
           name:"Specialites",
           onChange: handleCheckInput,
           label :'Specialites',
           options:specialties,

       }
   ]

    return {agentsListe, isLoading, handleSubmit, page,totalPages,changePage,totalItem,formAgentInput,handleSubmitNewAgent,handleOpen,handleClose,open,handleUpdate ,updateOpen,setUpdateOpen ,handleModifie}
}