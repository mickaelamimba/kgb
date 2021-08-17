import React from 'react'
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Targets} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
const ShowTargets =()=>{
    let match = useRouteMatch('/Admin/targets/:id/show/')
    const{id} = useParams()
    const history = useHistory()
    const {data, isLoading, isError} = useQuery(['Targets', id], () => Targets.oneById(id))
    const modal = useOpenModal()
    return(
        <ShowBox path='targets'>

        </ShowBox>
    )

}
export default ShowTargets