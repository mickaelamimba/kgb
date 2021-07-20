import {useState} from "react";
import Pays from "../Nationality/Nationality";

export default function useContact(){

    const [firstName, setFirstName]= useState()
    const [lastName, setLastName]= useState()
    const [birthDate, setBirthDate]= useState()
    const [codeName, setCodeName]= useState()
    const [nationality, setNationality]= useState()


    const formContactInput=[
        {
            format:'input',
            value: lastName,
            name:"lastName",
            onChange: e => setLastName(e.target.value),
            placeholder :'Nom',
            type: 'text'
        },
        {
            format:'input',
            value: firstName,
            name:"firstName",
            onChange: e => setFirstName(e.target.value),
            placeholder :'Prenom',
            type: 'text'
        },
        {
            format:'date',
            value: birthDate,
            name:"birth_date",
            onChange: e => setBirthDate(e.target.value),
            label :'date de naisence',
            type: 'date'
        },
        {
            format:'input',
            value: codeName,
            name:"code_name",
            onChange: e => setCodeName(e.target.value),
            placeholder :'Non de code',
            type: 'text'
        },
        {
            format:'select',
            value: nationality,
            name:"nationality",
            onChange: e => setNationality(e.target.value),
            label  :'Nationaliter',
            options:Pays
        },
    ]

    return{
        formContactInput,
    }
}
