import React from 'react';
import {Button} from "theme-ui";
import BoxHeading from "../UI/BoxHeading/BoxHeading";
import useContact from "../../Hooks/useContact";
import {useRouteMatch} from "react-router-dom";
import DisplayValidRequest from "../UI/DisplayMessage/DisplayValidRequest";
import Lists from "./Lists";

import DisplayError from "../UI/DisplayMessage/DisplayError";
import Create from "../UI/FormBox/Create";
import FormContacts from "./FormContacts";
const Contacts =()=>{
   const { isLoading,contactsListe,
       totalPages, totalItem, page, changePage,handleDelete, handleModify,handleOpenModal, openModal, onSubmit, } =useContact()
    let match = useRouteMatch(['/Admin/contacts/:id'])

    return(
        <BoxHeading title='Contacts' >

            <Button onClick={handleOpenModal}>ADD NEW CONTACT</Button>
            <Lists contact={contactsListe}
                   loading={isLoading}
                   changePage={changePage}
                   page={page}
                   totalItem={totalItem}
                   handleDelete ={handleDelete}
                   handleModify={handleModify}
                   totalPages={totalPages}

            />

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