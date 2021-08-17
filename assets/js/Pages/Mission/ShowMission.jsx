import React from 'react'
import {useRouteMatch} from "react-router-dom";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import {Missions} from "../../../Admin/Func/apiUrl";
import {Box, Divider, Flex, Spinner} from "theme-ui";
import Configs from "../../../Admin/Config/Config.json";
import {formatsDate, globalRegex, patt} from "../../../Admin/Func/formtsDate";
import {dlArrayFormat} from "../../../Admin/Func/formatArray";
import FrontShowBox from "../../Componets/UI/FrontSowBox/FrontShowBox";

const ShowMission =()=>{
    let match = useRouteMatch('/missions/:id')
    const {id}=useParams()
    let missions = []
    let arrayStashs =[]
    const {data:{...mission}, isLoading, isError}= useQuery(['Missions',id],  ()=>Missions.oneById(id))
    const {endDate,startDate,agents,contacts,targets,stashs,specialties,...infosMission}= mission


    const arrayOfMission =
        {
            ...infosMission,
            endDate: endDate !== undefined && formatsDate(endDate) ,
            startDate: startDate !== undefined && formatsDate(startDate),
            stashs: stashs !== undefined && stashs.code, specialties:specialties !== undefined &&  specialties.name
        }
    if(isLoading){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
    if(isError){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}>Error</Flex>
    }

    return(
        <FrontShowBox>
            {missions}
            <h3>Planque</h3>
            {arrayStashs}
            {dlArrayFormat(missions,arrayOfMission,Configs.table.mission)}
            {dlArrayFormat(arrayStashs,stashs,Configs.table.stashs)}
        </FrontShowBox>

    )
}
export default ShowMission