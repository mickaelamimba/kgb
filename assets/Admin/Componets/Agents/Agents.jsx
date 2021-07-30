import React from 'react';
import {Button} from "theme-ui";


import useNewAgents from "../../Hooks/useNewAgents";
import {useRouteMatch} from "react-router-dom";

import BoxHeading from "../UI/BoxHeading/BoxHeading";
import DisplayTableUi from "../UI/TableUI/DisplayTableUi";
import Configs from "../../Config/Config.json";
import Create from "../UI/FormBox/Create";
import FormAgent from "./FormAgent";



const Agents =()=>{
    let match = useRouteMatch(['/Admin/agents/:id','/Admin/agents/:id/modify/:id','/Admin/agents/:id/added'])

    const { isLoading, onSubmit,openModal, handleOpenModal,Lists, valueUpdate, update}= useNewAgents()

    return (
        <BoxHeading
            title={Configs.componentInfos.agents.headerTitle}
            handleOpenModal={handleOpenModal}
            btnTitle={Configs.componentInfos.agents.button}
        >

            <DisplayTableUi
                isLoading={isLoading}
                tableHeadProps={Configs.table.agents}
            >
            <Lists/>
            </DisplayTableUi>
            { openModal ?
                <Create
                    close={handleOpenModal}

                >
                    {
                        openModal &&  !update ?  <FormAgent
                            onSubmit={onSubmit}
                        />: null
                    }


                    {

                        update && openModal? <FormAgent
                            onSubmit={onSubmit}
                            valueUpdate={valueUpdate}
                        />:null
                    }

                </Create>: null
            }


        </BoxHeading>
      )
}
export default Agents