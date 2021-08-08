import React from "react";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import FormAgent from "./FormAgent";
import Configs from "../../Config/Config.json";

const Edit=({ close, defaultProps})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.agents.titleUpdate}
        >
            <FormAgent valueUpdate={defaultProps} />
        </CreateBox>
    )
}
export default Edit