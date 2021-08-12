import React from'react'


import {useQuery} from "react-query";
import { Missions} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";



import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import {ColumnsMissions} from "../../Config/ColumnsMissions";

const Table =()=>{
    const {handleDelete}= useMissionsCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Missions',()=>Missions.fetchAll(),

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
                title="Missions"
                columns={[...ColumnsMissions(handleDelete,history )]}
                data={data}
                pagination={true}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                loading={isLoading}




            />
        </React.Fragment>
    )
}
export default Table