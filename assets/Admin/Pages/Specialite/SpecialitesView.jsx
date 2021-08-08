
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";


import {useRouteMatch} from "react-router-dom";

import Configs from "../../Config/Config.json";

import Create from "../../Componets/UI/FormBox/Create";
import FormSpecialtie from "./FormSpecialtie";

import {useOpenModal} from "../../Context/OpenModalContext";
import Table from "./Table";
const SpecialitesView=()=> {

    const modal = useOpenModal()
    let match = useRouteMatch(['/Admin/specialities/:id'])

    return (
        <BoxHeading title={Configs.componentInfos.specialties.headerTitle}
                    btnTitle={Configs.componentInfos.specialties.button}
                    handleOpenModal={modal.handleOpenModal}>
            <Table/>


            {modal.openModal &&
            modal.create &&
            <Create
                close={modal.handleOpenModal}
                formTitleBtn={Configs.formInfo.specialties.titleAdd}
            >
                <FormSpecialtie/>
            </Create>
            }


        </BoxHeading>
    )
}
export default SpecialitesView