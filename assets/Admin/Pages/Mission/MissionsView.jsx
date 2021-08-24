import React from 'react';



import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";

import {useRouteMatch} from "react-router-dom";
import Create from "../../Componets/UI/FormBox/Create";
import FormMissions from "./FormMissions";
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import {useOpenModal} from "../../Context/OpenModalContext";
import Table from "./Table";
import TablesCard from "../../Componets/UI/TableUI/TablesCard";

const MissionsView=()=>{
    document.title='Missions'
    let match = useRouteMatch(['/Admin/missions/:id'])
    const modal =useOpenModal()
const {isError,isSuccess, handleAdde}=useMissionsCRUD()

    return(
        <BoxHeading title={Configs.componentInfos.missions.headerTitle}
                    handleOpenModal={modal.handleOpenModal}
                    btnTitle={Configs.componentInfos.missions.button}
                    isError={isError}
                    isSuccess={isSuccess}
        >
            <TablesCard>
                <Table/>
            </TablesCard>


            {modal.openModal &&
            <Create close={modal.handleOpenModal}
                    formTitleBtn={Configs.formInfo.missions.titleAdd}
            >
                <FormMissions
                    onSubmit={handleAdde}


                />

            </Create>
            }




        </BoxHeading >
    )
}
export default MissionsView