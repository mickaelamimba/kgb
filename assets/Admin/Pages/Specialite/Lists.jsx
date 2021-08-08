import {Paragraph, Spinner} from "theme-ui";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useQuery} from "react-query";
import {Specialties} from "../../Func/apiUrl";
import {useParams} from "react-router-dom";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";

const Lists =()=>{


    const {id}= useParams()
    const{handleModify,handleDelete,deleteLoad} =useSpecialtiesCRUD()
    const {data, isLoading, isError}= useQuery('Specialties',  ()=>Specialties.fetchAll(id))
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    if(isLoading){
        return <tr><td><Spinner/></td></tr>
    }
    if(isError){
        return <tr><td>Error</td></tr>
    }
    return(
        data?.map(({id, name},i)=>{
            return(
                <tr key={i}>
                    <td>{name}</td>

                    <td>
                        <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                        <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)}>{trash}</Paragraph>
                    </td>

                </tr>
            )


        })
    )

}

export default Lists