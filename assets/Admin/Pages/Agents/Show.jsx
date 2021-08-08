import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React from'react'
import {Box, Button} from "theme-ui";
import {useQuery} from "react-query";
import {Agents, Missions} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt,faPen} from "@fortawesome/free-solid-svg-icons";
import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "../Contact/Edit";
import {useOpenModal} from "../../Context/OpenModalContext";

const Show =()=>{
    const{id} = useParams()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/agents/:id/show/'])
    const pen = <FontAwesomeIcon icon={faPen} />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const {data:{...agent}, isLoading, isError}= useQuery(['Agents',id],  ()=>Agents.oneById(id))
   const  {...specialties}=agent.agentSpecialties
    const {handleModify,mutateAsyncDelete}= useAgentsCRUD()
    const handleDelete = async(data)=>{
        await mutateAsyncDelete(data)
        history.push(`/Admin/agents/1`)
    }
    const modal =useOpenModal()
    let arrSpe =[]
    Object.values(specialties).map(x=> arrSpe.push(x.id))

    const defaultValues = {
        firstName:agent?.firstName,
        lastName:agent?.lastName,
        birthDate: agent?.birthDate,
        indentificationCode: agent?.indentificationCode,
        nationality: agent?.nationality,


        agentSpecialties:arrSpe
    }
    console.log(defaultValues)
    return(
        <Box sx={{
            borderTop:'gray',
            'dl':{
                borderRightWidth:'calc(1px * 0)',
                borderLeftWidth:'calc(1px * calc(1 - 0))',
                'div':{
                    display:'grid',
                    gap:1,
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    paddingBottom:2
                }
            }
        }}>
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
                {Object.values(specialties).map(x  => <li key={x.id}>{x.name}</li>)}
            </ul>
            <dl>
                <div>
                    <dt>Action</dt>
                    <div>
                        <dd><Button onClick={()=>history.push(`/Admin/agents/1`)}>Retour</Button></dd>
                        <dd><Button onClick={modal.handleOpenModalUpdate}>Modifier {pen} </Button></dd>
                        <dd><Button onClick={()=>handleDelete(id)} bg='danger'>Suprimer {trash}</Button></dd>
                    </div>

                </div>
            </dl>
            { modal.openModalUpdate&&<Edit defaultProps={agent} close={modal.handleOpenModalUpdate}/>

            }


        </Box>

    )
}
export default Show