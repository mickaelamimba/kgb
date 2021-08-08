import React from 'react';



import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";

import DisplayTableUi from "../../Componets/UI/TableUI/DisplayTableUi";
import {useRouteMatch} from "react-router-dom";
import Create from "../../Componets/UI/FormBox/Create";
import FormMissions from "./FormMissions";
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import Lists from "./Lists";
import {useOpenModal} from "../../Context/OpenModalContext";

const Mission=()=>{
    let match = useRouteMatch(['/Admin/missions/:id'])
    const modal =useOpenModal()
const { handleAdde}=useMissionsCRUD()
    return(
        <BoxHeading title={Configs.componentInfos.missions.headerTitle}
                    handleOpenModal={modal.handleOpenModal}
                    btnTitle={Configs.componentInfos.missions.button}
        >
        <DisplayTableUi
            tableHeadProps={Configs.table.mission}
        >
        <Lists/>
        </DisplayTableUi>
            {modal.openModal ?
            <Create close={modal.handleOpenModal}>
                <FormMissions
                    title={Configs.formInfo.missions.titleAdd}
                    onSubmit={handleAdde}
                />

            </Create>: modal.openModalUpdate &&
                <Create close={modal.handleOpenModalUpdate}>
                    <FormMissions
                        onSubmit={handleAdde}
                     title={Configs.formInfo.missions.titleUpdate}/>

                </Create>
            }




        </BoxHeading >
    )
}
export default Mission