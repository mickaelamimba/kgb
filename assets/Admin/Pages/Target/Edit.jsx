
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import React from "react";
import Configs from "../../Config/Config.json";
import FormContacts from "../Contact/FormContacts";

const Edit=({ close,defaultValues, onSubmit})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.targets.titleUpdate}
        >
            <FormContacts
                onSubmit={onSubmit}
                valueUpdate={defaultValues}
                title='Modifier'
            />

        </CreateBox>
    )
}
export default Edit