import {useState} from "react";
import {useDispatch} from "react-redux";
import {text} from "@fortawesome/fontawesome-svg-core";

export default function useSpecialite(){
    const dispatch = useDispatch()
    const [name,setName]= useState('')
    const handlePostSpecialtie =()=>{
        dispatch()
    }

    const FormSpecialtie =[
        {
            format:'input',
            value: name,
            onChange: e => setName(e.target.value),
            placeholder : 'Votre Specialité',
            type: 'text'
        }
    ]
    return{
        handlePostSpecialtie,
        FormSpecialtie
    }
}