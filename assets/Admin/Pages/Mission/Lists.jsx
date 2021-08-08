import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useQuery} from "react-query";
import {Missions} from "../../Func/apiUrl";
import {Paragraph, Spinner} from "theme-ui";
import React from "react";

const Lists =()=>{
    let {id} = useParams()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const {data, isLoading, isError}= useQuery('Missions',  ()=>Missions.fetchAll(id))

    if(isLoading){
        return <tr><td><Spinner/></td></tr>
    }
    if(isError){
        return <tr><td>Error</td></tr>
    }
    return(
        data?.map(({id, title, description,
                       codeName,country,agents, contacts,
                       targets,missionType,status,stashs,
                       specialties,startDate,endDate},i)=>{
            return(
                <tr key={i}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{codeName}</td>
                    <td>{country}</td>
                    <td>{agents.map(item => <span key={item.id}>{item.name}</span>)}</td>
                    <td>{contacts.map(item => <span key={item.id}>{item.name}</span>)}</td>
                    <td>{targets.map(item => <span key={item.id}>{item.name}</span>)}</td>
                    <td>{missionType}</td>
                    <td>{status}</td>
                    <td>{stashs.code}</td>
                    <td>{specialties.name}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>
                        <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                        <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)} >{trash}</Paragraph>
                    </td>

                </tr>
            )


        })
    )

}

export default Lists