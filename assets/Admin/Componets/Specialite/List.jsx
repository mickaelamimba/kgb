import React from 'react';
import TableUI from "../UI/TableUI/TableUI";
import {Paragraph, Spinner} from "theme-ui";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const List =(loading ,totalItem, itemPerPage, totalPages, changePage,specialties})=>{
        const history =useHistory()
        const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
        const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
return (
    <TableUI
        totalItem={totalItem}
        totalPages={totalPages}
        itemPerPage={itemPerPage}
        changePage={changePage}
    >{loading === 'load' ?<Spinner/>: specialties ?
        <table>
           <thead>
           <tr>Specialité</tr>
           <tr>Action</tr>
           </thead>
           <tbody>
           {
                   specialties.map(({id,specialtie})=>{
                           return(
                               <tr key={id}>
                                   <td>{specialtie}</td>
                                   <td>
                                      <Paragraph  as='span'  onClick={()=>handleModifie(id)}>{pen}</Paragraph>
                                      <Paragraph pl={2} as='span'  onClick={()=>handleSubmit(id)}  value={id}>{trash}</Paragraph>
                                   </td>
                               </tr>
                           )
                   })
           }

           </tbody>

        </table>: null

    }

    </TableUI>)
}
export default  List