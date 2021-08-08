import React from'react'
import {useQuery} from "react-query";
import { Specialties} from "../../Func/apiUrl";
import {Spinner} from "theme-ui";


import {useHistory} from "react-router-dom";
import DataTable, {createTheme} from 'react-data-table-component';

import useSpecialtiesCRUD from "../../Hooks/useSpecialtiesCRUD";
import {ColumnsSpecialties} from "../../Config/ColumsSpecialties";





const Table =()=>{

    const {handleDelete}= useSpecialtiesCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Specialties',()=>Specialties.fetchAll(),

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
                title="Specialité "
                columns={[...ColumnsSpecialties(handleDelete,history )]}
                data={data}
                pagination={true}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}






            />
        </React.Fragment>
    )
}
export default Table