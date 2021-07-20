import React from 'react';
import {Button, Heading} from "theme-ui";
import Create from "./Create";
import List from "./List";
import useNewAgents from "../../Hooks/useNewAgents";
import {useRouteMatch} from "react-router-dom";
import Edit from "./Edit";
import DisplayError from "../UI/DisplayMessage/DisplayError";
import BoxHeading from "../UI/BoxHeading/BoxHeading";



const Agents =()=>{
    let match = useRouteMatch(['/Admin/agents/:id','/Admin/agents/:id/modify/:id','/Admin/agents/:id/added'])

    const {agentsListe, isLoading, handleSubmit, page,totalPages,changePage,
        totalItem,formAgentInput,handleSubmitNewAgent,handleOpen,
        handleClose,open,handleUpdate,updateOpen,handleModifie }= useNewAgents()

    return (
        <BoxHeading title='Agents'>
            <DisplayError message='erreur enregistrement' />
            <Button onClick={handleOpen}>ADD NEW AGENT</Button>
            <List agents={agentsListe}
                  loading={isLoading}
                  changePage={changePage}
                  page={page}
                  totalItem={totalItem}
                  handleSubmit={ handleSubmit}
                  handleModifie={handleModifie}
                  totalPages={totalPages}
            />
            {
                open ? <Create formAgentInput={formAgentInput}  handleSubmit={handleSubmitNewAgent} handleClose={handleClose}/>: null
            }
            {
               updateOpen ? <Edit formAgentInput={formAgentInput}  handleUpdate={handleUpdate } handleClose={handleClose}/>: null
            }
        </BoxHeading>
      )
}
export default Agents