import React, { useState} from 'react'


import {useQuery} from "react-query";

import { Flex, Spinner} from "theme-ui";



import {useHistory} from "react-router-dom";
import DataTable , { createTheme } from 'react-data-table-component';
import {Missions} from "../../../Admin/Func/apiUrl";
import {ColumnsMissionsFront} from "../../../Admin/Config/ColumnsMissionsFront";
import Search from "../../Componets/UI/Search/Search";
import {customStyles} from "../../customStyles";


const Table =()=>{
    const [searchText, setSearchText]=useState('')
    const [searchColumns, setSearchColumns]=useState(['title', 'status','id'])
    const handleSearch=(e)=>{
        let text = e.target.value
        setSearchText(text)
    }
    const {data, isLoading, isError,}= useQuery('Missions',()=>Missions.fetchAll(),
    )
    createTheme('frontTableUi',{
        background:{
            default:'hsla(201,42%,91%,0.34)'
        },


    })



    const history = useHistory()

    if(isLoading){

        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }

    if(isError){
        return <p>Error</p>
    }

    return(
        <React.Fragment>
            <DataTable
                title="Missions"
                columns={[...ColumnsMissionsFront(history)]}
                data={data.filter((rows)=>
                    searchColumns.some(
                        (column)=>
                            rows[column].toString().toLowerCase().indexOf(searchText.toLowerCase())>-1

                    )

                )}
                pagination={true}
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                loading={isLoading}
                subHeader
                subHeaderComponent={<Search searchText={searchText} handleSearch={handleSearch}/>}

                customStyles={customStyles}





            />
        </React.Fragment>
    )
}
export default Table