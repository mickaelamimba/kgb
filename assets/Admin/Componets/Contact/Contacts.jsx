import React from 'react';
import {Button, Paragraph} from "theme-ui";
import BoxHeading from "../UI/BoxHeading/BoxHeading";
import useContact from "../../Hooks/useContact";
import {useRouteMatch} from "react-router-dom";



import Create from "../UI/FormBox/Create";
import FormContacts from "./FormContacts";
import DisplayTableUi from "../UI/TableUI/DisplayTableUi";
import Configs from "../../Config/Config.json";

const Contacts =()=>{
    let match = useRouteMatch(['/Admin/contacts/:id'])
   const { isLoading,Lists,
       handleOpenModal, openModal, onSubmit, } =useContact()



    return(
        <BoxHeading
            title={Configs.componentInfos.contacts.headerTitle}
            btnTitle={Configs.componentInfos.contacts.button}
            handleOpenModal={handleOpenModal} >
            <DisplayTableUi
                isLoading={isLoading}
                tableHeadProps={Configs.table.duplicateValue}

            >
                <Lists/>
                
            </DisplayTableUi>


            {openModal?
                <Create
                    close={handleOpenModal}
                >
                    <FormContacts
                        onSubmit={onSubmit}
                        title='Ajouter '

                    />
                </Create>

                :null
            }
        </BoxHeading >
    )
}

export default Contacts