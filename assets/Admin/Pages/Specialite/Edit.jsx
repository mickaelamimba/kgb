import {useQuery} from "react-query";
import {Specialties} from "../../Func/apiUrl";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import FormSpecialtie from "./FormSpecialtie";
import React from "react";

const Edit=({ close,id,formTitleBtn})=>{
   const {data}= useQuery(['Specialties',id],  ()=>Specialties.oneById(id))
    return(
        <CreateBox
            handleClose={close}
            title={formTitleBtn}
        >
            <FormSpecialtie />
        </CreateBox>
    )
}
export default Edit