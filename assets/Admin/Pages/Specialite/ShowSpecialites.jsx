import React from 'react'
import {useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Specialties} from "../../Func/apiUrl";

import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {Box} from "theme-ui";
import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";

const ShowSpecialites =()=>{

 const{id} = useParams()
 const {data, isLoading, isError} = useQuery(['Specialties', id], () => Specialties.oneById(id))
 let match = useRouteMatch('/Admin/specialities/:id/show/')
    const {mutateAsyncUpdate}=useSpecialtiesCRUD()
    const modal = useOpenModal()

    const handleModify=async(data)=>{
    const newVar = await mutateAsyncUpdate({
            id:id,
            newData: data,
    }
    );
    modal.handleOpenModalUpdate()
    }
 return(
     <ShowBox
         path='specialities'
         deleteId={id}
     >
         <dl>
             <Box>
                 <dt>Specialiter</dt>
                 <dd>{data?.name}</dd>
             </Box>
         </dl>
         {modal.openModalUpdate&&
         <Edit
             onSubmit={handleModify}
             close={modal.handleOpenModalUpdate}
             defaultValues={data}
         />
         }

     </ShowBox>

 )
}
export default ShowSpecialites