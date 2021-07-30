import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

import {Agents, Specialties} from "../../Store/EntitySlice/EntityUrl";
import {setOpenModalOptions} from "../Func/OpenModale";
import {Paragraph} from "theme-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";





export default function useNewAgents(){
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    let match = useParams()

    const history=useHistory()


    const [update, setUpdate] = useState(false)



    const dispatch = useDispatch()
    const specialtiesListe =  useSelector(state => state.specialties.entities['hydra:member'] )

    const [create, setCreate] = useState(false)
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

 const  handleDelete= async (e)=>{
        dispatch( await Agents.deletes(e))

    }
    useEffect(() =>{
        if(isLoading  === 'load'){
            dispatch(Agents.fetches(match.id))
            dispatch(Specialties.fetches(match.id))

        }


    },[isLoading ,match.id,dispatch])




    const handle = async(e)=>{


        setUpdateOpen(true)
        history.push(`/Admin/agents/${match.id}/modify/${e}`)


    }
    const handleModify = async (i)=>{
        if(i){
            setUpdate(true)
            setOpenModal(true)
        }
        openModal ? update ?setUpdate(true): setUpdate(false): null
        console.log(i)

    }
    const valueUpdate =
       {
            firstName: 'test',
            lastName: 'martin',
            birthDate : '',
            indentificationCode: '',
            nationality:'' ,
            agentSpecialties: '',
        }



    const onSubmit= async (data)=>{
        if (data){
            dispatch( await Agents.posts(data))
        }


    }
    const Lists =()=>{

        return(
            agentsListe.map(({id, firstName, lastName, birthDate, indentificationCode,nationality, agentSpecialties},i)=>{
                return(
                    <tr key={i}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{birthDate}</td>
                        <td>{indentificationCode}</td>
                        <td>{nationality}</td>
                        <td>{agentSpecialties.map(item => <span key={item.id}>{item.name}</span>)}</td>

                        <td>
                            <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                            <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                        </td>

                    </tr>
                )


            })
        )

    }



    return {

        isLoading,

        onSubmit,
        valueUpdate,

        update,
        handleOpenModal,
        openModal,
        setOpenModal,
        specialtiesListe,
        Lists
    }
}