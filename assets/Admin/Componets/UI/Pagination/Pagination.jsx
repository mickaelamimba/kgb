import React from 'react';
import {Box} from "theme-ui";
import {faChevronRight,faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Pagination =({children,nextPage, page, lastPage,backPage})=>{

    return(
        <Box sx={{
            display: "flex",
            ' > div':{
                display:'block',
                padding:'8px 16px',
                border: '1px solid',
                borderColor: 'muted',
                cursor: 'pointer'

            }

        }}>
            {lastPage === false ? <Box onClick={nextPage} ><FontAwesomeIcon icon={faChevronRight}  /></Box> :null}


            {children}

            <Box onClick={backPage}><FontAwesomeIcon icon={faChevronLeft}  /></Box>
        </Box>
    )
}
export default Pagination