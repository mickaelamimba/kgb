import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Padding from "../Padding";
import {fetchMission} from "../../../Store/Mission/missionSlice";
import Lists from "./Lists";

function Mission (){

    const dispatch = useDispatch()
    const mission = useSelector(state =>state.mission.missionEntities)
    const padding = useSelector(state => state.mission.isLoading)
    const error = useSelector(state => state.mission.error)
    useEffect(()=>{

          dispatch(fetchMission())


    },[dispatch] )
    return(

        <div>
            {padding === 'load' ? (
                <Padding message={'Loading...'}/>
            ) : (mission.length !== 0 ? (mission.map((data, i) => {
               return( <Lists
                    key={i}
                    {...data}
                   />

               )})) : error


            )}

        </div>
    )
}

export default Mission