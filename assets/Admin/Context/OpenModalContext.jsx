import React, {createContext, useContext, useState} from 'react'
const OpenModalContext = createContext(undefined)
const OpenModalProvider =({children})=>{
    const [openModalUpdate, setOpenModalUpdate]=useState(false)
    const [openModal, setOpenModal]=useState(false)
    const [toggleMenu,setToggleMenu]=useState(false)
    const [update, setUpdate] = useState(false)
    const [create, setCreate] = useState(false)
    return(
        <OpenModalContext.Provider value={{
            openModalUpdate,
            openModal,
            update,
            create,
            toggleMenu,
            handleOpenModal:()=>{
                setCreate(!create)
                setOpenModal(!openModal)
            },
            handleOpenModalUpdate:()=>{
                setUpdate(!update)
                setOpenModalUpdate(!openModalUpdate)
            },
            handleToggleMenu:()=>{
                setToggleMenu(!toggleMenu)
            }


        }}>
            {children}
        </OpenModalContext.Provider>
    )
}

const useOpenModal=()=>{
    const context = useContext(OpenModalContext)
    if (context === undefined){
        throw new Error('OpenModalContext mus be used within a OpenModalProvider')
    }
    return context
}
export{OpenModalProvider,useOpenModal}