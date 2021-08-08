import React from 'react';

import {Paragraph, Spinner} from "theme-ui";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useQuery} from "react-query";
import {Contacts} from "../../Func/apiUrl";
import {useParams} from "react-router-dom";
import useContactsCRUD from "../../Hooks/useContactsCRUD";


const Lists =()=>{
    const {handleModify,handleDelete}=useContactsCRUD()
    const {id}= useParams()
    const {data, isLoading, isError}= useQuery('Contacts',  ()=>Contacts.fetchAll(id))
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    if(isLoading){
        return <tr><td><Spinner/></td></tr>
    }
    if(isError){
        return <tr><td>Error</td></tr>
    }
    return(

        data?.map(({id, firstName, lastName, birthDate, codeName,nationality},i)=>{
            return(
                <tr key={i}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{birthDate}</td>
                    <td>{codeName}</td>
                    <td>{nationality}</td>
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