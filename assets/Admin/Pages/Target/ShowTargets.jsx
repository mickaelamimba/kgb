import React from 'react'
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Targets} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
import {Flex, Spinner} from "theme-ui";
import Configs from "../../Config/Config.json";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import Edit from "./Edit";
import useTargetsCRUD from "../../Hooks/useTargetsCRUD";
const ShowTargets =()=>{

    let match = useRouteMatch('/Admin/targets/:id/show/')
    const{isUpdate,isUpdateSuccess,isUpdateError,mutateAsyncUpdate}=useTargetsCRUD()
    const{id} = useParams()
    const history = useHistory()
    const modal = useOpenModal()
    const {data:{...targets}, isLoading, isError} = useQuery(['Targets', id], () => Targets.oneById(id),{
        enabled:modal.enabled
    })
    const {birthDate,...infoTargets}=targets
    const parseContact={
        ...infoTargets,
        birthDate:birthDate&& new Date(birthDate).toISOString().slice(0,10)
    }

    const handleDelete= async()=>{
        modal.handleEnabled()
        await mutateAsyncDelete(id)
        history.push(`/Admin/targets`)

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

        <ShowBox path='targets'
                 isUpdateError={isUpdateError}
                 isUpdateSuccess={isUpdateSuccess}
                 handleDelete={handleDelete}
                 headerTitle="d'une cible"

        >
            <ShowBoxChild
                config={Configs.table.duplicateValue}
                arrayData={parseContact}

            />
            {modal.openModalUpdate&&
            <Edit
                close={modal.handleOpenModalUpdate}
                onSubmit={handleModify}
                defaultValues={parseContact}

            />

            }

        </ShowBox>
        </React.Fragment>
    )

}
export default ShowTargets