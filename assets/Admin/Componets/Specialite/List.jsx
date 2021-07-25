import React from 'react';
import TableUI from "../UI/TableUI/TableUI";
import {Paragraph, Spinner} from "theme-ui";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import useSpecialtie from "../../Hooks/useSpecialtie";
const Lists =()=>{
        const history =useHistory()
        const pen =<FontAwesomeIcon icon={faPen} color='yellow' />
        const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
    const{specialtiesListe, isLoading, totalPages ,changePage,totalItem } =useSpecialtie()
    return (
    <TableUI
        totalItem={totalItem}
        totalPages={totalPages}
        itemPerPage={13}
        changePage={changePage}
    >{isLoading === 'load' ?<Spinner/>: specialtiesListe ?
        <table>
           <thead>
           <tr>
               <th>Specialité</th>
               <th>Action</th>
           </tr>

           </thead>
           <tbody>
           {
               specialtiesListe.map(({id,name})=>{
                           return(
                               <tr key={id}>
                                   <td>{name}</td>
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
export default  Lists