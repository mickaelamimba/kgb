import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import React from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useQuery} from "react-query";
import { Stashs} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import Configs from "../../Config/Config.json";
import {Flex, Spinner} from "theme-ui";
import Edit from "./Edit";
import useStashsCRUD from "../../Hooks/useStashsCRUD";

const ShowStashs=()=>{
    const modal = useOpenModal()
    let match = useRouteMatch('/Admin/stashs/:id/show/')
    const{isUpdate,isUpdateSuccess,isUpdateError,mutateAsyncUpdate,mutateAsyncDelete}= useStashsCRUD()
    const{id} = useParams()
    const history = useHistory()
    const {data, isLoading, isError} = useQuery(['Stashs', id], () => Stashs.oneById(id),{
        enabled:modal.enabled
    })

    const handleDelete= async()=>{
        modal.handleEnabled()
        await mutateAsyncDelete(id)
        history.push(`/Admin/stashs`)
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
        <ShowBox path='stashs'
                 isUpdateSuccess={isUpdateSuccess}
                 isUpdateError={isUpdateError}
                 handleDelete={handleDelete}
                 headerTitle="d'une planque"
        >

            <ShowBoxChild

                config={Configs.table.stashs}
                arrayData={data}

            />
            {modal.openModalUpdate&&
                <Edit
                    close={modal.handleOpenModalUpdate}
                    onSubmit={handleModify}
                    defaultValues={data}

                />

            }

        </ShowBox>
        </React.Fragment>
    )
}
export default ShowStashs