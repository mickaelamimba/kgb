import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Specialties} from "../../Func/apiUrl";

import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {Box, Flex, Spinner} from "theme-ui";
import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import {useAlert} from "../../Context/AlertContext";

const ShowSpecialites =()=>{

 const{id} = useParams()
    const history = useHistory()
 const {data, isLoading, isError} = useQuery(['Specialties', id], () => Specialties.oneById(id))
 let match = useRouteMatch('/Admin/specialities/:id/show/')

    const {mutateAsyncUpdate, isUpdate,mutateAsyncDelete,isUpdateSuccess,isUpdateError}=useSpecialtiesCRUD()
    const modal = useOpenModal()
    const {AlertBox,handleCloseAlert}=useAlert()
    const handleDelete = async (data) => {
        await mutateAsyncDelete(data)
        history.push(`/Admin/specialities`)
    }

    const handleModify=async(data)=>{
     const newVar = await mutateAsyncUpdate({
                 id:id,
                 newData: data,
             }
         )

    modal.handleOpenModalUpdate()
    }
    if (isUpdate||isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
 return(
     <React.Fragment>
         {isUpdateSuccess||isUpdateError?
             <AlertBox
                 messages={isUpdateSuccess?Configs.submitSuccess.successUpdate:
                     isUpdateError ?Configs.submitErrors.errorUpdate:null}
                 handleCloseAlert={handleCloseAlert}
                 variant={isUpdateSuccess?'success':isUpdateError ?'danger':null}
             />:null
         }
     <ShowBox
         path='specialities'
         handleDelete={handleDelete}
     >
         <ShowBoxChild
             config={Configs.table.specialties}
             arrayData={data}

         />

         {modal.openModalUpdate&&
         <Edit
             onSubmit={handleModify}
             close={modal.handleOpenModalUpdate}
             defaultValues={data}
         />
         }

     </ShowBox>
     </React.Fragment>

 )
}
export default ShowSpecialites