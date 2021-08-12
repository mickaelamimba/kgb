
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";

import Configs from "../../Config/Config.json";

import {useOpenModal} from "../../Context/OpenModalContext";

import Create from "../../Componets/UI/FormBox/Create";
import FormContacts from "../Contact/FormContacts";
import useTargetsCRUD from "../../Hooks/useTargetsCRUD";
import {useRouteMatch} from "react-router-dom";
import Table from "./Table";
import TablesCard from "../../Componets/UI/TableUI/TablesCard";

const TargetsView=()=>{
    let match = useRouteMatch(['/Admin/targets/:id'])
    const modal =useOpenModal()
    const {handleAdde, isError,isSuccess}= useTargetsCRUD()
    return(
        <BoxHeading title={Configs.componentInfos.targets.headerTitle}
                    btnTitle={Configs.componentInfos.targets.button}
                    handleOpenModal={modal.handleOpenModal}
                    isError={isError}
                    isSuccess={isSuccess}
        >


            <TablesCard>
                <Table/>
            </TablesCard>


            {modal.openModal?
                <Create
                    close={modal.handleOpenModal}
                >
                    <FormContacts
                        onSubmit={handleAdde}
                        title='Ajouter '

                    />
                </Create>

                :null
            }
        </BoxHeading>
    )
}
export default TargetsView