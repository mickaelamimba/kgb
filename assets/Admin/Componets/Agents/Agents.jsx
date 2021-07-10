import React from 'react';
import {Button} from "theme-ui";
import Create from "./Create";
import List from "./List";
import useListsAgents from "../../Hooks/useListsAgents";
import useNewAgents from "../../Hooks/useNewAgents";
import {useRouteMatch} from "react-router-dom";



const Agents =()=>{
    let match = useRouteMatch('/Admin/agents/:id')

    const {agentsListe, isLoading, handleSubmit,pageBox,nextPage, page,lastPage,backPage} =useListsAgents (match.params.id)
    const {formAgentInput,handleSubmitNewAgent,handleOpen,handleClose,open}= useNewAgents()

    return (
        <div>
            <Button onClick={handleOpen}>ADD NEW AGENT</Button>
            <List agents={agentsListe}
                  loading={isLoading}
                  pageBox={pageBox}
                  nextPage={nextPage}
                  page={page}
                  lastPage={lastPage}
                  backPage={backPage}
                  handleSubmit={ handleSubmit}/>
            {
                open ? <Create formAgentInput={formAgentInput}  handleSubmit={handleSubmitNewAgent} handleClose={handleClose}/>: null
            }
        </div>

      )
}
export default Agents