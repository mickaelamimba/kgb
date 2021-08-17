import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import React from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Stashs} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import Configs from "../../Config/Config.json";
import {Flex, Spinner} from "theme-ui";

const ShowStashs=()=>{
    let match = useRouteMatch('/Admin/stashs/:id/show/')
    const{id} = useParams()
    const history = useHistory()
    const {data, isLoading, isError} = useQuery(['Stashs', id], () => Stashs.oneById(id))
    const modal = useOpenModal()


    if (isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
    return(
        <ShowBox path='stashs'>

            <ShowBoxChild

                config={Configs.table.stashs}
                arrayData={data}

            />

        </ShowBox>
    )
}
export default ShowStashs