import React, {useState} from 'react';
import {Doughnut} from "react-chartjs-2";
import DataTable from 'react-data-table-component';
import {Box, Flex, Grid, Heading, Spinner} from "theme-ui";

import {statusDoughnut} from "./statusDoughnut";
import {ColumnsMissionsHome} from "../../Config/ColumnsMissionsHome";
import {useHistory} from "react-router-dom";
import {customStyles} from "../../../js/customStyles";
import Search from "../../../js/Componets/UI/Search/Search";





const Home =()=>{
    const history = useHistory()
const{data,mission,isLoading}=statusDoughnut()
    const [searchText, setSearchText]=useState('')
    const [searchColumns, setSearchColumns]=useState(['specialties','title', 'status','id','missionType','country'])
    const handleSearch=(e)=>{
        let text = e.target.value
        setSearchText(text)
    }



    if (isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
    document.title='KGB-Admin'
    return (
        <React.Fragment>


            <Heading mb={3} as='h1' sx={{
                textAlign:'center',
                mb:4,
            }} > KGB-Admin</Heading>
            <Grid sx={{
                boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                p:2,
                borderRadius:4,
                justifyContent:['center','space-between'],
                alignItems:'center',
            }} gap={2} columns={[1,1,'1fr 2fr']}>
                <Box mb={3} sx={{
                    mx:'auto',
                    boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    p:3
                }}>
                    <Doughnut
                        data={data}/>
                </Box>
                <Box sx={{
                    p:3,
                    boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}>
                    <DataTable
                        title="Mission "
                        columns={[...ColumnsMissionsHome(history )]}
                        data={mission.filter((rows)=>
                            searchColumns.some(
                                (column)=>
                                    rows[column].toString().toLowerCase().indexOf(searchText.toLowerCase())>-1

                            )

                        )}
                        pagination={true}
                        highlightOnHover={true}
                        pointerOnHover={true}
                        responsive={true}
                        customStyles={customStyles}
                        subHeader
                        subHeaderComponent={<Search searchText={searchText} handleSearch={handleSearch}/>}

                    />
                </Box>


            </Grid>




        </React.Fragment>

    )
}

export default Home