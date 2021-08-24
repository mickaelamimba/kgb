
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import FormSpecialtie from "./FormSpecialtie";
import React from "react";
import Configs from "../../Config/Config.json";

const Edit=({ close,defaultValues, onSubmit})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.specialties.titleUpdate}
        >
            <FormSpecialtie
                onSubmit={onSubmit}
                defaultData={defaultValues}
                title='Modifier'
            />
        </CreateBox>
    )
}
export default Edit