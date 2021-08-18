import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import React from'react'
import {useQuery} from "react-query";
import { Contacts} from "../../Func/apiUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt,faPen} from "@fortawesome/free-solid-svg-icons";
import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Edit from "./Edit";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import {useAlert} from "../../Context/AlertContext";

const ShowContact =()=>{
    const{id} = useParams()
    const history = useHistory()
    const {AlertBox,handleCloseAlert}=useAlert()
    let match = useRouteMatch(['/Admin/contacts/:id/show/'])

    const {data:{...contact}, isLoading, isError}= useQuery(['Contacts',id],  ()=>Contacts.oneById(id))

    const {handleModify,mutateAsyncDelete,isUpdateSuccess,isUpdateError}= useAgentsCRUD()
    const handleDelete = async(data)=>{
        await mutateAsyncDelete(data)
        history.push(`/Admin/contacts`)
    }
    const modal =useOpenModal()

    const defaultValues = {
        firstName:contact?.firstName,
        lastName:contact?.lastName,
        birthDate: contact?.birthDate,
        codeName: contact?.codeName,
        nationality: contact?.nationality,

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
        <ShowBox path='contacts'>
            <ShowBoxChild
                config={Configs.table.duplicateValue}
                arrayData={contact}

            />

            { modal.openModalUpdate&&<Edit defaultProps={defaultValues} close={modal.handleOpenModalUpdate}/>

            }


        </ShowBox>
        </React.Fragment>

    )
}
export default ShowContact