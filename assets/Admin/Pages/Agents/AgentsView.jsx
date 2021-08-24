import React from 'react';


import {useRouteMatch} from "react-router-dom";
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";
import Create from "../../Componets/UI/FormBox/Create";
import FormAgent from "./FormAgent";
import {useOpenModal} from "../../Context/OpenModalContext";

import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import Table from "./Table";
import TablesCard from "../../Componets/UI/TableUI/TablesCard";





const AgentsView =()=>{
    document.title='Agents'
    let match = useRouteMatch(['/Admin/agents/:id'])
    const modal =useOpenModal()
    const {handleAdde,isError,isSuccess}=useAgentsCRUD()

    return (
        <BoxHeading
            title={Configs.componentInfos.agents.headerTitle}
            handleOpenModal={modal.handleOpenModal}
            btnTitle={Configs.componentInfos.agents.button}
            isError={isError}
            isSuccess={isSuccess}
        >
            <TablesCard>
                <Table
                />
            </TablesCard>


            { modal.openModal &&
                <Create
                    close={modal.handleOpenModal}
                    formTitleBtn={Configs.formInfo.agents.titleAdd}

                >

                    <FormAgent
                        onSubmit={handleAdde}
                    />

                </Create>
            }


        </BoxHeading>
      )
}
export default AgentsView