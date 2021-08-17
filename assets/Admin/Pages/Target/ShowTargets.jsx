import React from 'react'
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Targets} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
import {Flex, Spinner} from "theme-ui";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
const ShowTargets =()=>{
    let match = useRouteMatch('/Admin/targets/:id/show/')
    const{id} = useParams()
    const history = useHistory()
    const {data, isLoading, isError} = useQuery(['Targets', id], () => Targets.oneById(id))
    const modal = useOpenModal()
    if (isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
    return(
        <ShowBox path='targets'>
            <ShowBoxChild
                config={Configs.table.duplicateValue}
                arrayData={data}

            />

        </ShowBox>
    )

}
export default ShowTargets