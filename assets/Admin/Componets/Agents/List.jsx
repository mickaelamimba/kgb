import React from 'react';
import {Box, Button, Paragraph, Spinner} from "theme-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../UI/Pagination/Pagination";
import {useHistory} from "react-router-dom";
import TableUI from "../UI/TableUI/TableUI";


const List =({agents, loading,handleSubmit,totalPages,changePage,totalItem,handleModifie })=>{
    const history =useHistory()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    return(
        <TableUI totalPages={totalPages} changePage={changePage} itemPerPage={13} totalItem={totalItem}>

        {
            loading === 'load' ?
                <Spinner/>:agents ?
                <table>
                    <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Date de naissance</th>
                        <th>Code d'identification</th>
                        <th>Nationalité</th>
                        <th>Spécialités</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        agents.map(({id,firstName,lastName,birthDate, indentificationCode,nationality,agentSpecialties})=>{
                           return <tr key={id}>
                               <td>{firstName}</td>
                               <td>{lastName}</td>
                               <td>{new Date(birthDate).toDateString()}</td>
                               <td>{indentificationCode}</td>
                               <td>{nationality}</td>


                               <td>{
                                   agentSpecialties.map((options)=>{
                                       return <span key={options.id}>{options.name}</span>
                                   })

                               }</td>
                               <td>
                                   <Paragraph  as='span'  onClick={()=>handleModifie(id)}>{pen}</Paragraph>
                                   <Paragraph pl={2} as='span'  onClick={()=>handleSubmit(id)}  value={id}>{trash}</Paragraph>
                               </td>


                            </tr>

                        })
                    }

                    </tbody>

                </table>:null

        }

        </TableUI>
    )



}
export default  List