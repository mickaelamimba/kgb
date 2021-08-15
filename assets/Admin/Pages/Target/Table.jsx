import React from'react'


import {useQuery} from "react-query";
import { Targets} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";

import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';

import {ColumnsTargets} from "../../Config/ColumnsTargets";
import useTargetsCRUD from "../../Hooks/useTargetsCRUD";
import {customStyles} from "../../../js/customStyles";





const Table =()=>{
    const {handleDelete}= useTargetsCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Targets',()=>Targets.fetchAll(),

    )
    if(isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }

    if(isError){
        return <p>Error</p>
    }

    return(
        <React.Fragment>
            <DataTable
                title="Cibles"
                columns={[...ColumnsTargets(handleDelete,history )]}
                data={data}
                pagination={true}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                loading={isLoading}
                customStyles={customStyles}




            />
        </React.Fragment>
    )
}
export default Table