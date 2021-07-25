import {setOpenModalOptions} from "../Func/OpenModale";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {Specialties} from "../../Store/EntitySlice/EntityUrl";
import {useParams} from "react-router-dom";
import {setPaginationItemsPerPage} from "../Func/FuncPagination";
import * as yup from 'yup';


export default function useSpecialtie(){
    let match = useParams()
    const { handleOpenModal, openModal, setOpenModal}=setOpenModalOptions()
    const dispatch = useDispatch()
    const specialtie = useRef('')

    const specialtiesListe =  useSelector(state => state.specialties.entities['hydra:member'])
    const isLoading =  useSelector(state => state.specialties.loading)
    const totalItem =useSelector(state => state.specialties.entities['hydra:totalItems'] )


    useEffect(() => {
        dispatch(Specialties.fetches(1))
    }, [match.id , dispatch])
    const onSubmit = (data)=>{
        if(data){
            dispatch(Specialties.posts(data))
        }
        setOpenModal(false)
    }

const changePage=()=>{

}
    const{totalPages } = setPaginationItemsPerPage(totalItem)
    return{
        handleOpenModal,
        openModal,
        specialtie,
        onSubmit,
        specialtiesListe,
        isLoading,
        totalPages,
        totalItem,
        changePage,

    }
}