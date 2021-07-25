import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Pays from "../Nationality/Nationality";
import {Agents, Specialties} from "../../Store/EntitySlice/EntityUrl";
import {setOpenModalOptions} from "../Func/OpenModale";




export default function useNewAgents(){
    let match = useParams()

    const history=useHistory()
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [indentificationCode, setIndentificationCode] = useState('')
    const [nationality, setNationality] = useState('')
    const [checkSpecialtie, setCheckSpecialtie] = useState(false)
    const [specialtiesId, setSpecialtiesId] =useState([])

    const [modifyId, setModifyId] =useState(0)
    const dispatch = useDispatch()
    const specialties =  useSelector(state => state.specialties.entities['hydra:member'] )
    const [open, setOpen] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)
    const agentsListe =  useSelector(state => state.agents.entities['hydra:member'])

    const totalItem =useSelector(state => state.agents.entities['hydra:totalItems'] )
    const isLoading = useSelector(state => state.agents.loading )


    const totalPages =  Math.ceil( totalItem / 13)
    const { handleOpenModal, openModal, setOpenModal}=setOpenModalOptions()
    let [page , setPage]= useState(1)
    const changePage =({selected})=>{

        setPage(selected)
        history.push(`/Admin/agents/${selected}`)
        dispatch(Agents.fetches(selected))
    }

   function handleSubmit(e){
        dispatch(Agents.deletes(e))

    }
    useEffect(() =>{
        dispatch(Agents.fetches(match.id))
        dispatch(Specialties.fetches(match.id))

    },[match.id,dispatch])
    const handleOpen = () => {
       !open ? setOpen(true) :!updateOpen ?setUpdateOpen(true): null

        !open ? history.push(`/Admin/agents/${match.id}/added/`):null

    };
    const handleClose = () => {
        open ? setOpen(false) :updateOpen ?setUpdateOpen(false): null
        open ? history.push(`/Admin/agents/${match.id}`):
            updateOpen ? history.push(`/Admin/agents/${match.id}`):null
        setLastName('')
        setFirstName('')
        setBirthDate( '')
        setIndentificationCode('')
        setNationality('')
    };
    const toggle = (arr,item)=>{
        if(arr.includes(item)){
           return arr.filter(i=> i !== item)
        }
        else{
            return [...arr,item]
        }
    }
    const handleCheckInput= (e )=>{
      let id= e.target.id

        setCheckSpecialtie(!checkSpecialtie)
            setSpecialtiesId(toggle(specialtiesId, id))
    }


    const handleCheckUpdate= (e)=>{

        setSpecialtiesId(toggle(specialtiesId, id))
    }
    const handleModifie = async(e)=>{

        if(agentsListe.length> 0){
         const filters=  agentsListe.filter(agent => agent.id === e)

            filters.map(({lastName,firstName,birthDate,indentificationCode,nationality,agentSpecialties})=>{
                setLastName(lastName)
                setFirstName(firstName)
                setBirthDate( new Date(birthDate).toISOString().substr(0,10))
                setIndentificationCode(indentificationCode)
                setNationality(nationality)
                agentSpecialties.map(items => {

                    console.log(items.id)
                    specialties.filter(i => {

                        if(i.id === items.id){
                            setCheckSpecialtie(!checkSpecialtie)

                        }

                    })
                })
            })


        }
        setModifyId(e)
        setUpdateOpen(true)
        history.push(`/Admin/agents/${match.id}/modify/${e}`)


    }
    const handleUpdate =()=>{

        dispatch(Agents.updates(modifyId,{
            firstName:firstName,
            lastName: lastName,
            birthDate: birthDate,
            indentificationCode: indentificationCode,
            nationality: nationality,
            specialties:[]
        }))
    }


    const handleSubmitNewAgent=()=>{
        if(lastName && firstName && birthDate){
            dispatch(Agents.posts({
                firstName:firstName,
                lastName: lastName,
                birthDate: birthDate,
                indentificationCode: indentificationCode,
                nationality: nationality,
                agentSpecialties:specialtiesId
            }))
        }
        setOpen(false)

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
           format:'select',
           value: nationality,
           name:"nationality",
           onChange: e => setNationality(e.target.value),
           label  :'Nationaliter',
           options:Pays
       },
       {
           format: 'checked',
           value: checkSpecialtie,
           name:"Specialites",
           onChange: updateOpen ? handleCheckUpdate : handleCheckInput,
           label :'Specialites',
           options:specialties,

       }
   ]

    return {
        agentsListe,
        isLoading,
        handleSubmit,
        page,totalPages,
        changePage,totalItem,
        formAgentInput,
        handleSubmitNewAgent,
        handleOpen,handleClose,
        open,
        handleUpdate ,
        updateOpen,
        setUpdateOpen
        ,handleModifie,
        handleOpenModal,
        openModal,
        setOpenModal
    }
}