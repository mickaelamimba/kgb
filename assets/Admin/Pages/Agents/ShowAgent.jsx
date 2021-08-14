import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React from 'react'

import {useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";

import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "../Agents/Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";

const ShowAgent = () => {
    const {id} = useParams()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/agents/:id/show/'])

    const {data: {...agent}, isLoading, isError} = useQuery(['Agents', id], () => Agents.oneById(id))

    const {agentSpecialties,birthDate, ...pros }=agent
    const dataAgent=
        {
            ...pros,
            birthDate:birthDate !== undefined &&  new Date(birthDate).toISOString().slice(0,10),
            agentSpecialties: agentSpecialties !== undefined && agentSpecialties.map(spe => {
                return`/api/specialties/${spe.id}`


            })

        }

    const {handleModify, mutateAsyncDelete} = useAgentsCRUD()
    const handleDelete = async (data) => {
        await mutateAsyncDelete(data)
        history.push(`/Admin/agents`)
    }
    const modal = useOpenModal()


    const defaultValues = {}

    return (
        <ShowBox
            path='agents'
            deleteId={id}
            handleDelete={handleDelete}

        >
            <dl>
                <div>
                    <dt>Pernom</dt>
                    <dd>{agent?.firstName}</dd>
                </div>
                <div>
                    <dt>Non</dt>
                    <dd>{agent?.lastName}</dd>
                </div>
                <div>
                    <dt>Date de Naissonse</dt>
                    <dd>{agent?.birthDate}</dd>
                </div>
                <div>
                    <dt>Code d identification</dt>
                    <dd>{agent?.indentificationCode}</dd>
                </div>
                <div>
                    <dt>Nationaliter</dt>
                    <dd>{agent?.nationality}</dd>
                </div>

            </dl>
            <div>
                <h3>Specialiter</h3>
            </div>
            <ul>
                {/*{Object.values(specialties).map(x => <li key={x.id}>{x.name}</li>)}*/}
            </ul>

            {modal.openModalUpdate && <Edit defaultProps={dataAgent} close={modal.handleOpenModalUpdate}/>

            }


        </ShowBox>

    )
}
export default ShowAgent