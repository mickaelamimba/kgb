
import React from 'react';
import BoxHeading from "../UI/BoxHeading/BoxHeading";

import useSpecialtie from "../../Hooks/useSpecialtie";
import {Button} from "theme-ui";
import Lists from "./List";
import {useRouteMatch} from "react-router-dom";
import Create from "../UI/FormBox/Create";
import FormSpecialtie from "./FormSpecialtie";
const Specialite=()=>{
    const{openModal,onSubmit,formSpecialtiesInput, handleOpenModal} =useSpecialtie()
    let match = useRouteMatch(['/Admin/specialite/:id'])
    console.log(match)
    return(
        <BoxHeading title='Specialitie'>
            <Button onClick={handleOpenModal}>ADD NEW CONTACT</Button>
            <Lists/>
            { openModal ? <Create

                close={handleOpenModal}
            >
                <FormSpecialtie
                onSubmit={onSubmit}
                title='Ajouter Specialiter'
                />
            </Create>: null

            }


        </BoxHeading>
    )
}
export default Specialite