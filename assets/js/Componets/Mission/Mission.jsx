import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Padding from "../Padding";
import {fetchMission} from "../../../Store/Mission/missionSlice";
import Lists from "./Lists";
import {Box, Grid, Spinner} from "theme-ui";

function Mission (){

    const dispatch = useDispatch()
    const mission = useSelector(state =>state.mission.missionEntities)
    const padding = useSelector(state => state.mission.isLoading)
    const error = useSelector(state => state.mission.error)
    useEffect(()=>{

          dispatch(fetchMission())


    },[dispatch] )
    return(

        <Grid as='section' gap={[1,2,3]} width={[228, 230, 292,200]} columns={[2,2]} >

            {padding === 'load' ? (
                    <Spinner  />
            ) : (mission.length !== 0 ? (mission.map((data, i) => {
               return(

                       <Lists
                           key={i}
                           {...data}
                       />

               )})) : error


            )}

        </Grid>
    )
}

export default Mission