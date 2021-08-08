
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {Targets} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Paragraph, Spinner} from "theme-ui";
import React from "react";
import useTargetsCRUD from "../../Hooks/useTargetsCRUD";

const Lists =()=>{
    const {handleModify,handleDelete}=useTargetsCRUD()
    const {id}= useParams()
    const {data, isLoading, isError}= useQuery('Targets',  ()=>Targets.fetchAll(id))

    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    if(isError){
        return <tr><td>Error</td></tr>
    }
    if(isLoading){
        return <tr><td><Spinner/></td></tr>
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