import { useRouteMatch,} from "react-router-dom";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchMission} from "../../../Store/Mission/missionSlice";
import Padding from "../Padding";
import MissionOneById from "./MissionOneById";
import {Spinner} from "theme-ui";


const OneById =()=>{

 let match = useRouteMatch('/missions/:id')
    const mission = useSelector(state =>state.mission.missionOneById)
    console.log(mission)
    const padding = useSelector(state => state.mission.isLoading)
    const error = useSelector(state => state.mission.error)
    const dispatch = useDispatch()
    useEffect(()=>{

            dispatch(fetchMission(match.url))


    },[dispatch] )
    return (

        <div>
            {padding === 'load' ?(
                <Spinner  />):(
                mission.length !== 0 ? (mission.map((data, i)=>{
                    return(<MissionOneById
                        key={i}
                        {...data}
                    />)
                })):error
            )
            }



        </div>


      )


}

export default OneById