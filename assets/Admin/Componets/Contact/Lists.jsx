import React from 'react';
import TableUI from "../UI/TableUI/TableUI";
import {Paragraph, Spinner} from "theme-ui";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import useContact from "../../Hooks/useContact";

const Lists =()=>{
    const { isLoading,contactsListe, totalPages, totalItem, changePage,handleDelete, handleModify} =useContact()
    const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    return(
        <TableUI totalPages={totalPages} changePage={changePage} itemPerPage={13} totalItem={totalItem}>
            { isLoading === 'load' ?
                <Spinner/>:contactsListe ?
                <table>

                    <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Date de naissance</th>
                        <th>Non de Code</th>
                        <th>Nationalité</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        contactsListe.map(({id,firstName, lastName,birthDate,codeName,nationality})=>{
                        return (
                        <tr key={id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{birthDate}</td>
                        <td>{codeName}</td>
                        <td>{nationality}</td>
                            <td>
                                <Paragraph  as='span'  onClick={()=>handleModify(id)}>{pen}</Paragraph>
                                <Paragraph pl={2} as='span'  onClick={()=>handleDelete(id)}  value={id}>{trash}</Paragraph>
                            </td>
                        </tr>
                        )
                    })

                    }

                    </tbody>

                </table>: null

            }

        </TableUI>
    )

}
export default Lists