import React from 'react';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Box, Paragraph, Spinner} from "theme-ui";
import Pagination from "../UI/Pagination/Pagination";
import TableUI from "../UI/TableUI/TableUI";
const List =()=>{
    const history =useHistory()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    return(
        <TableUI totalPages={totalPages} changePage={} itemPerPage={} totalItem={}>

                {
                    loading === 'load' ?
                        <Spinner/>:agents ?
                        <table>
                            <thead>
                            <tr>
                                <th>titre</th>
                                <th>Description</th>
                                <th>Nom de code</th>
                                <th>Pays</th>
                                <th>agents</th>
                                <th>Contacts</th>
                                <th>Cibles</th>
                                <th>type de mission</th>
                                <th>Statut </th>
                                <th>Planque</th>
                                <th>Spécialité </th>
                                <th>Date de débu</th>
                                <th>Date de fin</th>
                                <th>Action</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                mission.map(({id,firstName,lastName,birthDate, indentificationCode,nationality,agentSpecialties})=>{
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



        </ TableUI>
    )

}
export default  List