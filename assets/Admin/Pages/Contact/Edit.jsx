import React from "react";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";

import Configs from "../../Config/Config.json";
import FormContacts from "./FormContacts";

const Edit=({ close, defaultValues,onSubmit})=>{


    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.contacts.titleUpdate}
        >
            <FormContacts title='Modifier' valueUpdate={defaultValues} onSubmit={onSubmit}/>
        </CreateBox>
    )
}
export default Edit