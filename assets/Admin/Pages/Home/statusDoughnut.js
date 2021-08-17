import {useQuery} from "react-query";
import {Missions} from "../../Func/apiUrl";
import Configs from "../../Config/Config.json";
import React from  'react'

export const statusDoughnut=()=>{
    let preparation=[]
    let progress=[]
    let finished=[]
    let failure=[]

    const {data:mission,isLoading}= useQuery('Missions',()=>Missions.fetchAll(),)
    mission?.map((v)=>{
        switch (v.status){
            case Configs.status.preparation:
                preparation.push(v.status)
                break;
            case Configs.status.progress :
                progress.push(v.status)
                break;
            case Configs.status.finished :
                finished.push(v.status)
                break;
            case Configs.status.failure :
                failure.push(v.status)
                break;
        }

    })

    const data = {
        labels: [Configs.status.preparation, Configs.status.progress, Configs.status.finished, Configs.status.failure],
        datasets: [
            {
                label: 'Missions Status',
                data: [preparation.length,progress.length, finished.length, failure.length],
                backgroundColor: [
                    'rgba(236,195,34,0.96)',
                    'rgb(152,178,36)',
                    'rgba(52,232,2,0.34)',
                    'rgba(199,25,25,0.98)',

                ],
                borderColor: [
                    'rgb(255,206,99)',
                    'rgb(135,235,54)',
                    'rgb(100,157,14)',
                    'rgba(180,45,45,0.63)',


                ],
                borderWidth: 1,
            },
        ],
    }
    return{
        data,
        mission,
        isLoading
    }
}