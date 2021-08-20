import React from'react'
import {useQuery} from "react-query";
import { Specialties} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";


import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';

import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";
import {ColumnsSpecialties} from "../../Config/ColumsSpecialties";
import {customStyles} from "../../../js/customStyles";





const Table =()=>{

    const {handleDelete}= useSpecialtiesCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Specialties',Specialties.fetchAll,

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
                columns={[...ColumnsSpecialties(handleDelete,history )]}
                data={data}
                pagination={true}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                customStyles={customStyles}






            />
        </React.Fragment>
    )
}
export default Table