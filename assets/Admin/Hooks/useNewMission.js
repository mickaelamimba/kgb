import React, {useEffect, useState} from 'react';
import {postNewMission} from "../../Store/Mission/missionSlice";
import {useDispatch, useSelector} from "react-redux";


export default function useNewMission() {
    const [title, setTitle] = useState('')
    const [codeName, setCodeName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [missionType, setMissionType] = useState('')
    const [status, setStatus] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const dispatch = useDispatch()


    const handleSubmit=()=>{
        if(title&& codeName && description && country){
            dispatch(postNewMission({
                title,
                codeName,
                description,
                country,
                missionType,
                status,
                startDate,
                endDate,
                specialtie_mission_id:'specialtie/1'
            }))
        }
    }

    const formMissionInput =[
        {
            format:'input',
            value: title,
            name:"title",
            onChange: e => setTitle(e.target.value),
            placeholder :'Titre',
            type: 'text'
        },
        {
            format:'input',
            value: codeName,
            name:'code_name',
            onChange: e => setCodeName(e.target.value),
            placeholder :'Non de code',
            type: 'text'
        },
        {
            format:'textarea',
            name:"description",
            value: description,
            onChange: e => setDescription(e.target.value),
            placeholder :'Description',

        },

        {
            format:'input',
            value: country,
            name:'country',
            onChange: e => setCountry(e.target.value),
            placeholder :'Pays',
            type: 'text'
        },
        {
            format:'select',
            value: missionType,
            name:'mission_type',

            onChange: e => setMissionType(e.target.value),
            options:['Surveillance','Assassinat','Infiltration'],

        },
        {
            format:'select',
            value: status,
            name:'status',
            onChange: e => setStatus(e.target.value),
            options:['En préparation','en cours','terminé','échec'],


        },{
            format:'date',
            value: startDate,
            onChange: e => setStartDate(e.target.value),
            name:'start_date',
            label  :'Date de début',
            type: 'date'
        },{
            format:'date',
            name:'end_date',
            value: endDate,
            onChange: e => setEndDate(e.target.value),
            label :'Date de fin',
            type: 'date'
        },

    ]

    return {formMissionInput,handleSubmit}

}

