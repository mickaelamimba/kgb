import {useState} from "react";


export const setOpenModalOptions =()=>{
    const [openModalUpdate, setOpenModalUpdate]=useState(false)
    const [openModal, setOpenModal]=useState(false)
    const [update, setUpdate] = useState(false)
    const [create, setCreate] = useState(false)


    const handleOpenModal =()=>{
       setCreate(!create)
        setOpenModal(!openModal)
    }
    const handleOpenModalUpdate =()=>{
        setUpdate(!update)
        setOpenModalUpdate(!openModalUpdate)

    }
    return{
        handleOpenModal,
        openModal,
        setOpenModal,
        create,
        handleOpenModalUpdate,
        update,
        setUpdate,
        openModalUpdate,
        setOpenModalUpdate

    }
}
