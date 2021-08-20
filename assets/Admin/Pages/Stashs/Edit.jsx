
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";

import React from "react";
import Configs from "../../Config/Config.json";
import FormStashs from "./FormStashs";

const Edit=({ close,defaultValues, onSubmit})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.stashs.titleUpdate}
        >
            <FormStashs
                onSubmit={onSubmit}
                valueUpdate={defaultValues}
                title='Modifier'
            />
        </CreateBox>
    )
}
export default Edit