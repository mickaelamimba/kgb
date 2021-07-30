import React, {useEffect, useState} from "react";
import {Stashs} from "../../Store/EntitySlice/EntityUrl";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {Paragraph} from "theme-ui";
import {setOpenModalOptions} from "../Func/OpenModale";


export default function useStashs(){
    let match = useParams()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>

    const dispatch = useDispatch()
    const stashsListe =  useSelector(state => state.stashs.entities['hydra:member'])
    const oneById =  useSelector(state => state.stashs.oneById)
    const isLoading =  useSelector(state => state.stashs.loading)
    const errorFetch=  useSelector(state => state.stashs.errors)
    const [modifyId,setModifyId]=useState()
    console.log(oneById)

    useEffect( () => {
        ((async () => {
            if(isLoading === 'load'){
                dispatch(  await Stashs.fetches(match.id))
            }
        })())


    },[isLoading,match.id,dispatch])
    const { handleOpenModal, openModal,create, setOpenModal,setUpdate,handleOpenModalUpdate ,openModalUpdate, setOpenModalUpdate}=setOpenModalOptions()
    const onSubmit = async(data)=>{
        if(data){
            dispatch( await Stashs.posts(data))
        }

    }
    const onSubmitUpdate =async (datas)=>{
        if(datas){
            dispatch( await Stashs.updates({id:modifyId, data: datas}))
        }
        console.log('update:',datas)
    }

    const handleModify = async (id)=>{
        if(id){
            dispatch(  await Stashs.fetchById(id))

            if(   await oneById ){

                setModifyId(id)
                setUpdate(true)
                setOpenModalUpdate(true)
            }


        }

    }
    let valueUpdate
    if(isLoading === 'load' && oneById){
        valueUpdate ={
            code: oneById.code,
            address: oneById.address,
            country: oneById.country,
            type : oneById.type,
        }
    }



    const handleDelete = async (id)=>{
        dispatch( await Stashs.deletes(id))
    }
    const Lists =()=>{

        return(isLoading?
            stashsListe.map(({id, code, address, country, type},i)=>{
                return(
                    <tr key={i}>
                        <td>{code}</td>
                        <td>{address}</td>
                        <td>{country}</td>
                        <td>{type}</td>
                        <td>
                            <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                            <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                        </td>

                    </tr>
                )


            }):null
        )

    }


    return{
        onSubmit,
        Lists,
        handleOpenModal,
        handleOpenModalUpdate,
        openModal,
        create,
        isLoading,
        errorFetch,
        onSubmitUpdate,
        openModalUpdate,
        valueUpdate
    }
}