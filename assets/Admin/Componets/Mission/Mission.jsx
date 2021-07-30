import React from 'react';



import BoxHeading from "../UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";
import useMission from "../../Hooks/useMission";
import DisplayTableUi from "../UI/TableUI/DisplayTableUi";
import {useRouteMatch} from "react-router-dom";
import Create from "../UI/FormBox/Create";
import FormMissions from "./FormMissions";

const Mission=()=>{
    let match = useRouteMatch(['/Admin/missions/:id'])

const {handleOpenModal, openModal,handleOpenModalUpdate,
    isLoading,Lists,openModalUpdate,onSubmit,onSubmitUpdate }=useMission()
    return(
        <BoxHeading title={Configs.componentInfos.missions.headerTitle}
                    handleOpenModal={handleOpenModal}
                    btnTitle={Configs.componentInfos.missions.button}
        >
        <DisplayTableUi
            isLoading={isLoading}
            tableHeadProps={Configs.table.mission}
        >
        <Lists/>
        </DisplayTableUi>
            {openModal ?
            <Create close={handleOpenModal}>
                <FormMissions
                    title={Configs.formInfo.missions.titleAdd}
                    onSubmit={onSubmit}
                />

            </Create>: openModalUpdate &&
                <Create close={handleOpenModalUpdate}>
                    <FormMissions
                        onSubmit={onSubmitUpdate}
                     title={Configs.formInfo.missions.titleUpdate}/>

                </Create>
            }




        </BoxHeading >
    )
}
export default Mission