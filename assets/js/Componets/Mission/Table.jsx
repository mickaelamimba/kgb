import React from "react";
import {Box} from "theme-ui";
const Table = ({ children})=>{
    return(
        <Box m={0}  as='table' sx={{
            tableLayout:'fixed',
            borderCollapse: 'collapse',
            borderSpacing:0,
            width:'100%'

        }}>
            <Box bg='tablebg' as='thead' sx={{
                display: 'table-header-group',
                verticalAlign: 'middle',
                borderColor: 'inherit',



            }}>
            <tr>
                <th>titre</th>
                <th>description</th>
                <th>nom de code</th>
                <th>pays</th>
                <th>statut</th>
                <th>...</th>
            </tr>
            </Box>
            <Box as='tbody' sx={{
                display: 'table-row-group',
                verticalAlign: 'baseline',
                borderColor: 'inherit',
            }}>
            {children}
            </Box>

        </Box>
    )

}
export default Table;