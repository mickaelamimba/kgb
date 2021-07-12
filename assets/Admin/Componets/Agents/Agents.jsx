import React from 'react';
import {Button, Heading} from "theme-ui";
import Create from "./Create";
import List from "./List";
import useNewAgents from "../../Hooks/useNewAgents";
import {useRouteMatch} from "react-router-dom";
import Edit from "./Edit";



const Agents =()=>{
    let match = useRouteMatch(['/Admin/agents/:id','/Admin/agents/:id/modify/:id'])

    const {agentsListe, isLoading, handleSubmit, page,totalPages,changePage,
        totalItem,formAgentInput,handleSubmitNewAgent,handleOpen,
        handleClose,open,handleUpdate,updateOpen,handleModifie }= useNewAgents()

    return (
        <div>
            <title>Agent</title>
            <Heading mb={3} as='h1'>Agents</Heading>
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
        </div>
      )
}
export default Agents