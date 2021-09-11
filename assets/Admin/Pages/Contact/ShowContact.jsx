import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React, {useState} from 'react'
import {useQuery} from "react-query";
import { Contacts} from "../../Func/apiUrl";


import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import {useAlert} from "../../Context/AlertContext";
import {Flex, Spinner} from "theme-ui";
import useContactsCRUD from "../../Hooks/useContactsCRUD";

const ShowContact =()=>{
    const modal =useOpenModal()
    const{id} = useParams()
    const history = useHistory()
    let match = useRouteMatch(['/Admin/contacts/:id/show/'])
    const  handleModify = async(data)=>{
        await mutateAsyncUpdate({
            id: id,
            newData: data
        })
        modal.handleOpenModalUpdate()
    }

    const {data:{...contact}, isLoading, isError}= useQuery(['Contacts',id],  ()=>Contacts.oneById(id),{
        enabled: modal.enabled
    })
        const {birthDate,...infoContact}=contact
    const parseContact={
        ...infoContact,
        birthDate:birthDate&& new Date(birthDate).toISOString().slice(0,10)
    }
    const {mutateAsyncUpdate,mutateAsyncDelete,isUpdateSuccess,isUpdateError,isUpdate}= useContactsCRUD()
    const handleDelete = async()=>{
       modal.handleEnabled()
        await mutateAsyncDelete(id)
        history.push(`/Admin/contacts`)
    }



    if (isUpdate||isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }

    return(
        <React.Fragment>
        <ShowBox path='contacts'
                 handleDelete={handleDelete}
                 isUpdateSuccess={isUpdateSuccess}
                 isUpdateError={isUpdateError}
                 headerTitle="d'un contact"
        >
            <ShowBoxChild
                config={Configs.table.duplicateValue}
                arrayData={parseContact}

            />

            { modal.openModalUpdate&&
            <Edit
                defaultValues={parseContact}
                close={modal.handleOpenModalUpdate}
                onSubmit={handleModify}
            />

            }


        </ShowBox>
        </React.Fragment>

    )
}
export default ShowContact