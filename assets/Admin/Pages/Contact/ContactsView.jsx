import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";

import {useRouteMatch} from "react-router-dom";



import Create from "../../Componets/UI/FormBox/Create";
import FormContacts from "./FormContacts";

import Configs from "../../Config/Config.json";

import {useOpenModal} from "../../Context/OpenModalContext";
import useContactsCRUD from "../../Hooks/useContactsCRUD";
import Table from "./Table";

import TablesCard from "../../Componets/UI/TableUI/TablesCard";



const ContactsView =()=>{
    let match = useRouteMatch(['/Admin/contacts/:id'])
    const modal =useOpenModal()
    const {handleAdde}=useContactsCRUD()


    return(
        <BoxHeading
            title={Configs.componentInfos.contacts.headerTitle}
            btnTitle={Configs.componentInfos.contacts.button}
            handleOpenModal={modal.handleOpenModal} >
    <TablesCard >


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
        </BoxHeading >
    )
}

export default ContactsView