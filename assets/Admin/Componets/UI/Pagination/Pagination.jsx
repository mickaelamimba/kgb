import React, {useState} from 'react';
import {Box, Button} from "theme-ui";
import {usePagination} from "../../../Hooks/usePagination";



const Pagination =({totalItem,itemPerPage,paginate,previousLabel = null,nextLabel=null})=>{
 const {handlePrevious,handleNext,handleClick, randNumberPage,currentPage, pageNumber}= usePagination(totalItem,itemPerPage,paginate)

    return(
        <Box sx={{
            'ul':{
                display: "flex",
                listStyle:'none',
                '> li':{
                    padding:'8px 16px',
                    borderColor: 'muted',
                    border:'1px solid',
                    transition: 'background-color .3s',
                    cursor:'pointer',

                },
                button:{
                    all:"unset",
                    cursor:'pointer',
                    '&:hover':{
                        backgroundColor:'none'
                    }


                }
            }

        }}>
            <ul>
                {previousLabel ?
                    <li >
                        <Button await onClick={handlePrevious}
                                disabled={currentPage.selected == pageNumber.length ? true : false}
                        >{previousLabel} </Button>

                    </li>:null

                }

                {randNumberPage}

                {nextLabel ?
                    <li>
                        <Button await onClick={handleNext}
                                disabled={currentPage.selected === 1 ? true : false}
                        >{nextLabel} </Button>

                    </li>:null}

            </ul>
        </Box>

    )
}
export default Pagination