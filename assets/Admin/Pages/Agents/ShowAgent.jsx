import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React,{useState} from 'react'

import {useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";

import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "../Agents/Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {Alert, Close, Flex, Spinner} from "theme-ui";

const ShowAgent = () => {
    const {id} = useParams()
    const modal = useOpenModal()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/agents/:id/show/'])
    const { mutateAsyncDelete,mutateAsyncUpdate,deleteLoad,isUpdate,isUpdateSuccess} = useAgentsCRUD()

    const handleDelete = async () => {
        history.push(`/Admin/agents`)
        await mutateAsyncDelete(id)




    }


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

    const handleModify=async(data)=>{

            const newVar = await mutateAsyncUpdate({
                    id:id,
                    newData: data,
                }
            )

        modal.handleOpenModalUpdate()
    }
    if (isUpdate){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }


    const [hidden,setHidden]=useState(true)

    return (

        <React.Fragment>

            {isUpdateSuccess&&hidden&&
            <Alert my={2}  variant='success'>
                mise a jour effecté avec sucsses!
                <Close onClick={()=>setHidden(!hidden)} ml="auto" mr={-2} />
            </Alert>
            }


        <ShowBox
            path='agents'

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