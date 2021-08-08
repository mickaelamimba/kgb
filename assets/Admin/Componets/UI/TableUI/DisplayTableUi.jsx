import React, {forwardRef} from "react";
import {Box, Paragraph, Spinner,} from "theme-ui";
import PropTypes from "prop-types";



const DisplayTableUi = ({  tableHeadProps, children })=>{

    return(
        <React.Fragment>
            <Box mb={3} sx={{
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
                    'th, td':{
                        padding:2,
                        textAlign:'center',
                    },
                    'tr:nth-of-type(even)':{
                        backgroundColor:'muted'
                    }
                }
            }}>

                    <table>

                        <thead>
                        <tr>
                            {
                                Object.values(tableHeadProps).map((headProps,i)=>{
                                    return <th key={i}>{headProps}</th>
                                })
                            }

                        </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>

                    </table>




            </Box>






        </React.Fragment>
    )
}
export default DisplayTableUi

DisplayTableUi.prototype ={
    tableHeadProps : PropTypes.object,
    isLoading : PropTypes.string,
    children : PropTypes.node
}

