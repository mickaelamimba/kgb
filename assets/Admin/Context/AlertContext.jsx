import React, {createContext, useContext, useState} from "react";
import {Alert, Close} from "theme-ui";


const AlertContext =createContext(undefined)
    const AlertContextProvider=({children})=>{
    const [closeAlert, setCloseAlert]=useState(true)

    return(
        <AlertContext.Provider value={{
            closeAlert,
            AlertBox:({messages,handleCloseAlert, variant})=>{
                if(closeAlert){
                    return (
                        <Alert variant={variant}>
                            {messages}
                            <Close onClick={handleCloseAlert} ml="auto" mr={-2} />
                        </Alert>
                    )
                }else {
                    return null;
                }
            },
            handleCloseAlert:()=>{
                setCloseAlert(!closeAlert)
            }
        }}>
            {children}
        </AlertContext.Provider>
    )
    }

const useAlert=()=>{
    const context = useContext(AlertContext)
    if (context === undefined){
        throw new Error('OpenModalContext mus be used within a AlertContextProvider')
    }
    return context
}
export {useAlert,AlertContextProvider}

