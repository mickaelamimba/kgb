import {useState} from "react";


export const setOpenModalOptions =()=>{
    const [openModal, setOpenModal]=useState(false)


    const handleOpenModal =()=>{

        setOpenModal(!openModal)
    }
    return{
        handleOpenModal,
        openModal,
        setOpenModal
    }
}
