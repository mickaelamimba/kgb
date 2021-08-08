import {Paragraph, Spinner} from "theme-ui";
import React from "react";
import {useQuery} from "react-query";
import {Specialties, Stashs} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import useStashsCRUD from "../../Hooks/useStashsCRUD";

const Lists =()=>{
    const {handleModify,handleDelete}=useStashsCRUD()
    const {id}= useParams()
    const {data, isLoading, isError}= useQuery('Stashs',  ()=>Stashs.fetchAll(id))
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    if(isLoading){
        return <tr><td><Spinner/></td></tr>
    }
    if(isError){
        return <tr><td>Error</td></tr>
    }
    return(
            data?.map(({id, code, address, country, type},i)=>{
                return(
                    <tr key={i}>
                        <td>{code}</td>
                        <td>{address}</td>
                        <td>{country}</td>
                        <td>{type}</td>
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