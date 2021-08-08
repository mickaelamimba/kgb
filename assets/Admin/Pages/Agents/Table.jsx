import React from'react'
import Configs from "../../Config/Config.json";

import {useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";
import {Spinner} from "theme-ui";

import {tableIcons} from "../../Componets/UI/TableUI/tableIcon";
import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';
import {ColumnsAgents} from "../../Config/ColumnsAgents";





const Table =()=>{
    const {handleModify,handleDelete}= useAgentsCRUD()
    const handleAction =(vale)=>{
        console.log(vale)

    }
    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Agents',()=>Agents.fetchAll(),

    )
    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <p>Error</p>
    }
    console.log(data)
    return(
        <React.Fragment>
            <DataTable
                title="Agents"
                columns={[...ColumnsAgents(handleDelete,history )]}
                data={data}
                pagination={true}




            />
        </React.Fragment>
    )
}
export default Table