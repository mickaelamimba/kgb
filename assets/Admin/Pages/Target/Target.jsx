
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";

import Configs from "../../Config/Config.json";
import DisplayTableUi from "../../Componets/UI/TableUI/DisplayTableUi";
import {useOpenModal} from "../../Context/OpenModalContext";
import Lists from "./Lists";
import Create from "../../Componets/UI/FormBox/Create";
import FormContacts from "../Contact/FormContacts";
import useTargetsCRUD from "../../Hooks/useTargetsCRUD";
import {useRouteMatch} from "react-router-dom";
const Target=()=>{
    let match = useRouteMatch(['/Admin/targets/:id'])
    const modal =useOpenModal()
    const {handleAdde}= useTargetsCRUD()
    return(
        <BoxHeading title={Configs.componentInfos.targets.headerTitle}
                    btnTitle={Configs.componentInfos.targets.button}
                    handleOpenModal={modal.handleOpenModal} >
            <DisplayTableUi
                tableHeadProps={Configs.table.duplicateValue}
            >
                <Lists/>
            </DisplayTableUi>
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
export default Target