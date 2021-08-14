import React from'react'


import {useQuery} from "react-query";
import {Agents} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";


import useAgentsCRUD from "../../Hooks/useAgentsCRUD";
import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';
import {ColumnsAgents} from "../../Config/ColumnsAgents";




const Table =()=>{
    const {handleDelete}= useAgentsCRUD()

    const history = useHistory()


    const {data, isLoading, isError,}= useQuery('Agents',Agents.fetchAll,

    )
    if(isLoading){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
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