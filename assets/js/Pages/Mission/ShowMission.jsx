import React from 'react'
import {useRouteMatch} from "react-router-dom";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import {Missions} from "../../../Admin/Func/apiUrl";
import {Box, Flex, Spinner} from "theme-ui";
import Configs from "../../../Admin/Config/Config.json";
import {formatsDate, globalRegex, patt} from "../../../Admin/Func/formtsDate";
import {dlArrayFormat} from "../../../Admin/Func/formatArray";

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
    console.log(agents)
    return(
        <Box sx={{
            'dl':{
                display:"flex",
                justifyContent: 'space-between',
                width:[300,400,500]
            }
        }}>
            {missions}
            <h3>Planque</h3>
            {arrayStashs}

            {agents.map((agent)=>{
                Object.values(agent).map((item)=>{
                    formatsDate(item)
                    console.log(item)
                })
                if(globalRegex.test(agent.birthDate)){


                }

               // agent.replaceAll('^\d{4}\W\d{2}\W\d{2}[a-zA-Z](\d\W*)+','^\d{4}\W\d{2}\W\d{2}')


            }) }

            {dlArrayFormat(missions,arrayOfMission,Configs.table.mission)}
            {dlArrayFormat(arrayStashs,stashs,Configs.table.stashs)}

        </Box>
    )
}
export default ShowMission