import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Pagination from "../Pagination/Pagination";
import {Box} from "theme-ui";

const TableUI =({children, totalItem,itemPerPage,totalPages,changePage})=>{

    return(
        <React.Fragment>
            <Box mt={2} sx={{
                borderRadius: 5,
                border:'1px solid',
                borderColor:'muted',
                'table':{
                    overflow: 'auto',
                    borderCollapse:'collapse',
                    borderSpacing:0,
                    width:'100%',

                    'thead':{
                        width:'100%',
                        backgroundColor: 'secondary'

                    },
                    'th, td, span':{
                        padding:2,
                        textAlign:'center',
                    },
                    'tr:nth-of-type(even)':{
                        backgroundColor:'muted'
                    }


                }
            }}>

                {children}
            </Box>

            <Pagination
                previousLabel={<FontAwesomeIcon icon={faChevronRight}  />}
                nextLabel={<FontAwesomeIcon icon={faChevronLeft}  />}
                totalItem={totalItem}
                itemPerPage={itemPerPage}
                pageCount={totalPages}
                paginate={changePage}
            />


        </React.Fragment>

    )
}
export default TableUI