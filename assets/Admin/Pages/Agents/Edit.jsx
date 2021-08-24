import React from "react";
import CreateBox from "../../Componets/UI/CreateBox/CreateBox";
import FormAgent from "./FormAgent";
import Configs from "../../Config/Config.json";

const Edit=({ close, defaultProps,onSubmit})=>{

    return(
        <CreateBox
            handleClose={close}
            title={Configs.formInfo.agents.titleUpdate}
        >
            <FormAgent
                onSubmit={onSubmit}
                valueUpdate={defaultProps}
                title='Modifier'
            />
        </CreateBox>
    )
}
export default Edit