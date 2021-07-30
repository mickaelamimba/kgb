import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setOpenModalOptions} from "../Func/OpenModale";
import {Missions, Stashs} from "../../Store/EntitySlice/EntityUrl";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Paragraph} from "theme-ui";


export default function useMission() {
    let match = useParams()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const dispatch = useDispatch()
    const missionsListe =  useSelector(state => state.missions.entities['hydra:member'])
    const isLoading =  useSelector(state => state.missions.loading)
    console.log(missionsListe)
    useEffect( () => {
        ((async () => {
            if(isLoading === 'load'){
                dispatch(  await Missions.fetches(match.id))
            }
        })())


    },[isLoading,match.id,dispatch])
    const { handleOpenModal, openModal,create, setOpenModal,setUpdate,handleOpenModalUpdate ,openModalUpdate, setOpenModalUpdate}=setOpenModalOptions()
    const handleModify = async (id)=>{

    }
    const handleDelete = async (id)=>{
        dispatch( await Stashs.deletes(id))
    }
    const onSubmit =(datas)=>{
        console.log(datas)

    }
    const onSubmitUpdate =(datas)=>{
        console.log(datas)
    }
    const Lists =()=>{

        return(isLoading &&
                missionsListe.map(({id, title, description,
                                       codeName,country,agents, contacts,
                                       targets,missionType,status,stashs,
                                       specialties,startDate,endDate},i)=>{
                    return(
                        <tr key={i}>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{codeName}</td>
                            <td>{country}</td>
                            <td>{agents.map(item => <span key={item.id}>{item.name}</span>)}</td>
                            <td>{contacts.map(item => <span key={item.id}>{item.name}</span>)}</td>
                            <td>{targets.map(item => <span key={item.id}>{item.name}</span>)}</td>
                            <td>{missionType}</td>
                            <td>{status}</td>
                            <td>{stashs.code}</td>
                            <td>{specialties.name}</td>
                            <td>{startDate}</td>
                            <td>{endDate}</td>
                            <td>
                                <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                                <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                            </td>

                        </tr>
                    )


                })
        )

    }


    return {handleOpenModal,
        openModal,
        handleOpenModalUpdate,
        isLoading,
        Lists,
        openModalUpdate,
        create ,
        onSubmit,
        onSubmitUpdate
    }

}

