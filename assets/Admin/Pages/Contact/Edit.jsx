import React from "react";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";

import Configs from "../../Config/Config.json";
import FormContacts from "./FormContacts";
import useContactsCRUD from "../../Hooks/useContactsCRUD";

const Edit=({ close, defaultProps})=>{
    const {handleModify}=useContactsCRUD()

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.agents.titleUpdate}
        >
            <FormContacts title='contacts form' valueUpdate={defaultProps}  onSubmit={handleModify}/>
        </CreateBox>
    )
}
export default Edit