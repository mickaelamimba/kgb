import {useState} from "react";


export const setStatusAndInterval =()=>{
    const [status, setStatus]=useState(false)
    const Interval =(value )=>{
        const interval=  setInterval(()=>{
            setStatus(value)
        },4000)
        return ()=> clearInterval(interval)
    }
    return{
        status,
        setStatus,
        Interval
    }
}

