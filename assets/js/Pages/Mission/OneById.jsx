import { useRouteMatch,} from "react-router-dom";
import React from 'react'

import MissionOneById from "./MissionOneById";
import {Spinner} from "theme-ui";
import {useQuery} from "react-query";
import {Missions} from "../../../Admin/Func/apiUrl";
import {useParams} from "react-router";


const OneById =()=>{

 let match = useRouteMatch('/missions/:id')
    const {id}=useParams()
    const {data, isLoading, isError}= useQuery(['Missions',id],  ()=>Missions.oneById(id))

       console.log(data)
    return (

        <div>
            {isLoading ?<Spinner  />:
                data?.map((datas,i)=>{
                    return(<MissionOneById key={i}{...datas} />)
                })


            }





        </div>


      )


}

export default OneById