import React from 'react'
import {useRouteMatch} from "react-router-dom";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import {Missions} from "../../../Admin/Func/apiUrl";
import {Flex, Grid, Spinner} from "theme-ui";
import Configs from "../../../Admin/Config/Config.json";
import {formatDateInArray, formatsDate, globalRegex, patt} from "../../../Admin/Func/formtsDate";

import FrontShowBox from "../../Componets/UI/FrontSowBox/FrontShowBox";
import ShowBoxChild from "../../../Admin/Componets/UI/ShowBox/ShowBoxChild";
import ShowBoxArray from "../../../Admin/Componets/UI/ShowBox/ShowBoxArray";

const ShowMission =()=>{
    let match = useRouteMatch('/missions/:id')
    const {id}=useParams()
    const {data:{...mission}, isLoading, isError}= useQuery(['Missions',id],  ()=>Missions.oneById(id))
    formatDateInArray(mission)
    const {agents,contacts,targets,stashs,specialties,...infosMission}= mission
    const arrayOfMission =
        {
            ...infosMission,
            stashs: stashs !== undefined && stashs.code, specialties:specialties !== undefined &&  specialties.name
        }

    if(isLoading){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
    if(isError){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}>Error</Flex>
    }

    return(
        <FrontShowBox path='/'>
            <ShowBoxChild
                config={Configs.table.mission}
                arrayData={arrayOfMission}

            />
            <Grid as='dl' width={'auto'} columns={[1,2,3]}>
                <ShowBoxArray
                    title='Agents'
                    arrayData={agents}
                    config={Configs.table.agents}

                />
                <ShowBoxArray
                    title='Contact'
                    arrayData={contacts}
                    config={Configs.table.duplicateValue}

                />
                <ShowBoxArray
                    title='Cible'
                    arrayData={targets}
                    config={Configs.table.duplicateValue}
                />
            </Grid>
        </FrontShowBox>

    )
}
export default ShowMission