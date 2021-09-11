import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React,{useState} from 'react'

import {useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";

import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "../Agents/Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import { Box,  Flex, Spinner} from "theme-ui";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import ShowBoxArray from "../../Componets/UI/ShowBox/ShowBoxArray";

const ShowAgent = () => {
    document.title='agent - show'
    const {id} = useParams()
    const modal = useOpenModal()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/agents/:id/show/'])
    const { mutateAsyncDelete,mutateAsyncUpdate,isUpdate,isUpdateSuccess,isUpdateError} = useAgentsCRUD()
    const {data: {...agent}, isLoading, isError} = useQuery(['Agents', id], () => Agents.oneById(id),{
        enabled:modal.enabled
    })

    const handleDelete = async () => {
        modal.handleEnabled()
        await mutateAsyncDelete(id)
        history.push(`/Admin/agents`)


    }
    const {agentSpecialties,birthDate, ...pros }=agent
    const dataAgent=
        {
            ...pros,
            birthDate:birthDate !== undefined &&  new Date(birthDate).toISOString().slice(0,10),
            agentSpecialties: agentSpecialties !== undefined && agentSpecialties.map(spe => {
                return`/api/specialties/${spe.id}`


            })

        }

        const specialties=[
            {
                specialties:agentSpecialties?.map(spe => <Box key={spe.id} px={2} as="span">{spe.name}</Box> )
            }
        ]

    const handleModify=async(data)=>{

            const newVar = await mutateAsyncUpdate({
                    id:id,
                    newData: data,
                }
            )

        modal.handleOpenModalUpdate()
    }
    if (isUpdate||isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }

    return (

        <React.Fragment>
        <ShowBox
            path='agents'
            handleDelete={handleDelete}
            isUpdateSuccess={isUpdateSuccess}
            isUpdateError={isUpdateError}
            headerTitle="d'un agent"

        >
            <ShowBoxChild
                config={Configs.table.agents}
                arrayData={dataAgent}

            />
            <ShowBoxArray
                config={Configs.table.agents}
                arrayData={specialties}
            />

            <ul>
                {/*{Object.values(specialties).map(x => <li key={x.id}>{x.name}</li>)}*/}
            </ul>

            {modal.openModalUpdate && <Edit
                defaultProps={dataAgent}
                onSubmit={handleModify}
                close={modal.handleOpenModalUpdate}/>

            }


        </ShowBox>
        </React.Fragment>

    )
}
export default ShowAgent