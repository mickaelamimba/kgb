import {useCallback, useEffect, useState} from "react";
import Pays from "../Nationality/Nationality";
import {Contacts} from "../../Store/EntitySlice/EntityUrl";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setStatusAndInterval} from "../Func/Interval";
import { setPaginationItemsPerPage} from "../Func/FuncPagination";
import {setOpenModalOptions} from "../Func/OpenModale";

export default function useContact(){
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
           await dispatch(Contacts.posts(data))

        }


   }

    useEffect(() => {
        dispatch(Contacts.fetches(match.id))
    },[match.id,dispatch])
    const {status, setStatus, Interval}=setStatusAndInterval()
    const{totalPages } = setPaginationItemsPerPage(totalItem)


    const changePage =({selected})=>{
        setPage(selected)
        history.push(`/Admin/contact/${selected}`)
        dispatch(Contacts.fetches(selected))
    }



   const handleDelete =()=>{

   }
    const handleModify =()=>{

    }


    return{
        isLoading,
        contactsListe,
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
