import React from'react'


import {useQuery} from "react-query";
import {Agents, Contacts} from "../../Func/apiUrl";
import {Flex, Spinner} from "theme-ui";


import {useHistory} from "react-router-dom";
import DataTable from 'react-data-table-component';

import useContactsCRUD from "../../Hooks/useContactsCRUD";
import {ColumnsContacts} from "../../Config/ColumnsContacts";
import {customStyles} from "../../../js/customStyles";





const Table =()=>{
    const {handleDelete}= useContactsCRUD()

    const history = useHistory()
    const {data, isLoading, isError,}= useQuery('Contacts',()=>Contacts.fetchAll(),

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
                columns={[...ColumnsContacts(handleDelete,history )]}
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