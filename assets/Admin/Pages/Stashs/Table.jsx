import React from'react'


import {useQuery} from "react-query";
import { Stashs} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";



import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';


import {ColumnsStashs} from "../../Config/ColumnsStashs";
import useStashsCRUD from "../../Hooks/useStashsCRUD";
import {customStyles} from "../../../js/customStyles";





const Table =()=>{
    const {handleDelete}= useStashsCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Stashs',()=>Stashs.fetchAll(),

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
                columns={[...ColumnsStashs(handleDelete,history )]}
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