import React, {useEffect, useState} from 'react';
import { Paragraph, Spinner} from "theme-ui";
import { useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt,faEye} from "@fortawesome/free-solid-svg-icons";
import {useHistory, useParams} from "react-router-dom";
import useAgentsCRUD from "../../Hooks/useAgentsCRUD";




const Lists =()=>{
    const {handleModify,handleDelete}= useAgentsCRUD()
    const {data, isLoading, isError,}= useQuery('Agents',()=>Agents.fetchAll(),

    )

    const history = useHistory()

    const eye =<FontAwesomeIcon icon={faEye}  />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    if(isLoading){
        return <tr><td><Spinner/></td></tr>
    }

    if(isError){
        return <tr><td>Error</td></tr>
    }

    return(
        data?.map(({id, firstName, lastName, birthDate, indentificationCode,nationality, agentSpecialties},i)=>{
            return(
                <tr key={i}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{birthDate}</td>
                    <td>{indentificationCode}</td>
                    <td>{nationality}</td>
                    <td>{agentSpecialties.map(item => <span key={item.id}>{item.name}</span>)}</td>

                    <td>
                        <Paragraph  as='span'  onClick={()=>history.push(`/Admin/agents/${id}/show/`)}>{eye}</Paragraph>
                        <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                    </td>

                </tr>
            )


        })
    )

}
export default  Lists