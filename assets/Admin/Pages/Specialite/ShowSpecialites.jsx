import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Specialties} from "../../Func/apiUrl";

import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {Box, Flex, Spinner} from "theme-ui";
import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";

const ShowSpecialites =()=>{

 const{id} = useParams()
    const history = useHistory()
 const {data, isLoading, isError} = useQuery(['Specialties', id], () => Specialties.oneById(id))
 let match = useRouteMatch('/Admin/specialities/:id/show/')
    const {mutateAsyncUpdate, isUpdate,mutateAsyncDelete}=useSpecialtiesCRUD()
    const modal = useOpenModal()
    const handleDelete = async (data) => {
        await mutateAsyncDelete(data)
        history.push(`/Admin/specialities`)
    }

    const handleModify=async(data)=>{
     try {
         const newVar = await mutateAsyncUpdate({
                 id:id,
                 newData: data,
             }
         )
         console.log(newVar)
        }catch (e){
         console.log(e)
     }finally {
         console.log('done')
     }

    modal.handleOpenModalUpdate()
    }
    if (isUpdate){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
 return(
     <ShowBox
         path='specialities'
         deleteId={id}
         handleDelete={handleDelete}
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