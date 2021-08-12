import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React from'react'
import {Box, Button} from "theme-ui";
import {useQuery} from "react-query";
import {Agents, Contacts, Missions} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt,faPen} from "@fortawesome/free-solid-svg-icons";
import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";

const ShowContact =()=>{
    const{id} = useParams()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/contacts/:id/show/'])
    const pen = <FontAwesomeIcon icon={faPen} />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const {data:{...contact}, isLoading, isError}= useQuery(['Contacts',id],  ()=>Contacts.oneById(id))

    const {handleModify,mutateAsyncDelete}= useAgentsCRUD()
    const handleDelete = async(data)=>{
        await mutateAsyncDelete(data)
        history.push(`/Admin/contacts`)
    }
    const modal =useOpenModal()

    const defaultValues = {
        firstName:contact?.firstName,
        lastName:contact?.lastName,
        birthDate: contact?.birthDate,
        codeName: contact?.codeName,
        nationality: contact?.nationality,

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
                    <dd>{contact?.firstName}</dd>
                </div>
                <div>
                    <dt>Non</dt>
                    <dd>{contact?.lastName}</dd>
                </div>
                <div>
                    <dt>Date de Naissonse</dt>
                    <dd>{contact?.birthDate}</dd>
                </div>
                <div>
                    <dt>Non de code</dt>
                    <dd>{contact?.codeName}</dd>
                </div>
                <div>
                    <dt>Nationaliter</dt>
                    <dd>{contact?.nationality}</dd>
                </div>
                <div>
                    <dt>Action</dt>
                    <div>
                        <dd><Button onClick={()=>history.push(`/Admin/contacts`)}>Retour</Button></dd>
                        <dd><Button onClick={modal.handleOpenModalUpdate}>Modifier {pen} </Button></dd>
                        <dd><Button onClick={()=>handleDelete(id)} bg='danger'>Suprimer {trash}</Button></dd>
                    </div>

                </div>

            </dl>

            { modal.openModalUpdate&&<Edit defaultProps={defaultValues} close={modal.handleOpenModalUpdate}/>

            }


        </Box>

    )
}
export default ShowContact