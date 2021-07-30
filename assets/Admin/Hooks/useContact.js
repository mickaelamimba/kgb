import React, {useCallback, useEffect, useState} from "react";

import {Contacts} from "../../Store/EntitySlice/EntityUrl";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setStatusAndInterval} from "../Func/Interval";
import { setPaginationItemsPerPage} from "../Func/FuncPagination";
import {setOpenModalOptions} from "../Func/OpenModale";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Paragraph} from "theme-ui";


export default function useContact(){

    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    let match = useParams()
    const dispatch = useDispatch()
    let [page , setPage]= useState(1)
    const [submitErrors,setSubmitErrors]=useState(false)
    const contactsListe =  useSelector(state => state.contacts.entities['hydra:member'])
    const isLoading =  useSelector(state => state.contacts.loading)
    const error = useSelector(state => state.contacts.errors)
    const totalItem =useSelector(state => state.contacts.entities['hydra:totalItems'] )
    const { handleOpenModal, openModal, setOpenModal}=setOpenModalOptions()




    const onSubmit = async(data)=>{

        if(data){
           await dispatch(  await Contacts.posts(data))

        }


   }

    useEffect(() => {
        if(isLoading === 'load'){
            dispatch(Contacts.fetches(match.id))
        }

    },[isLoading,match.id,dispatch])
    const {status, setStatus, Interval}=setStatusAndInterval()
    const{totalPages } = setPaginationItemsPerPage(totalItem)


    const changePage =({selected})=>{
        setPage(selected)
        history.push(`/Admin/contact/${selected}`)
        dispatch(Contacts.fetches(selected))
    }



  const  handleDelete =(i)=>{

        dispatch(Contacts.deletes(i))
        console.log(i)

  }
    const handleModify =()=>{

    }
    const Lists =()=>{

            return(
                contactsListe.map(({id, firstName, lastName, birthDate, codeName,nationality},i)=>{
                    return(
                        <tr key={i}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{birthDate}</td>
                            <td>{codeName}</td>
                            <td>{nationality}</td>
                            <td>
                                <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                                <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                            </td>

                        </tr>
                    )


                })
            )

    }



    return{
        isLoading,
        Lists,
        totalPages,
        totalItem,
        page,
        changePage,
        handleDelete,
        handleModify,
        handleOpenModal,
        openModal,
        onSubmit,
        setSubmitErrors,
        submitErrors

    }
}
