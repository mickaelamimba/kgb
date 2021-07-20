import React from 'react';
import TableUI from "../UI/TableUI/TableUI";
import {Spinner} from "theme-ui";

const List =({loading,contact})=>{
    return(
        <TableUI>
            { loading === 'load' ?
                <Spinner/>:contact ?
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
                        contact.map({{id,firstName,lastName,birthDate, indentificationCode,nationality}=>{

                    })
                    }
                    </tbody>

                </table>: null

            }

        </TableUI>
    )

}
export default List