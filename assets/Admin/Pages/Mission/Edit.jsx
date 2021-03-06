
import React from "react";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import Configs from "../../Config/Config.json";
import FormMissions from "./FormMissions";


const Edit=({ close,defaultValues, onSubmit})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.missions.titleUpdate}
        >
            <FormMissions
                onSubmit={onSubmit}
                defaultData={defaultValues}
                title='Modifier'
            />

        </CreateBox>
    )
}
export default Edit