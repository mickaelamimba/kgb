
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";


import {useRouteMatch} from "react-router-dom";

import Configs from "../../Config/Config.json";

import Create from "../../Componets/UI/FormBox/Create";
import FormSpecialtie from "./FormSpecialtie";

import {useOpenModal} from "../../Context/OpenModalContext";
import Table from "./Table";
import TablesCard from "../../Componets/UI/TableUI/TablesCard";
import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";

const SpecialitesView=()=> {
    document.title='Specialité'

    const modal = useOpenModal()
    let match = useRouteMatch(['/Admin/specialities/:id'])
    const {handleAdde,isError,isSuccess}=useSpecialtiesCRUD()


    return (
        <BoxHeading title={Configs.componentInfos.specialties.headerTitle}
                    btnTitle={Configs.componentInfos.specialties.button}
                    handleOpenModal={modal.handleOpenModal}
                    isError={isError}
                    isSuccess={isSuccess}
        >
            <TablesCard>
                <Table/>
            </TablesCard>



            {modal.openModal &&
            modal.create &&
            <Create
                close={modal.handleOpenModal}
                formTitleBtn={Configs.formInfo.specialties.titleAdd}

            >
                <FormSpecialtie
                    onSubmit={handleAdde}

                />
            </Create>
            }




        </BoxHeading>
    )
}
export default SpecialitesView