import React from 'react'
import {Box} from "theme-ui";

const DisplayTableUi = ({tableHeadProps , children})=>{
    return(
        <React.Fragment>
            <Box mb={3} sx={{
                overflow: 'auto',
                border:'1px solid #54627bb5',
                borderRadius:4,
                'table':{
                    overflow: 'auto',
                    borderCollapse:'collapse',
                    borderSpacing:0,
                    width:'100%',
                    'thead':{
                        width:'100%',
                        backgroundColor: 'inherit'

                    },
                    backgroundColor:'muted',
                    'tr:nth-of-type(even)':{
                        backgroundColor:'primaryMuted'
                    },
                    'th, td':{
                        padding:2,
                        textAlign:'center',
                        borderTop: '1px solid #54627bb5'

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