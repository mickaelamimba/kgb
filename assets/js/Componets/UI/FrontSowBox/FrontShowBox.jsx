import React from 'react'
import {Box, Button, Grid} from "theme-ui";
const FrontShowBox =(children)=>{
    return(
        <Box sx={{
            padding:3,
            borderTop:'gray',
            boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            borderRadius:4,
            'dl':{
                'div':{
                    display:['block','grid'],
                    gap:1,
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    paddingTop:2,
                    paddingBottom:2,
                    borderTopWidth: 'calc(1px * calc(1 - 0))',
                    borderBottomWidth: 'calc(1px * 0)',
                    borderStyle:[0, "solid"],
                    borderRight:0,
                    borderLeft:0,

                    borderColor:'rgba(138,141,145,0.59)'
                },
                'dt':{
                    color:' rgba(107,114,128,1)',
                    fontWeight: 500,

                }
            }
        }}>
            {children}

            <Box>
                <Grid columns={[2,3,2]} as='nav' mt={5} sx={{
                    width:'100%',
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                    <h5>Action</h5>
                    <Grid gap={3} width={[200,100,'8rem']} columns={[1,3,3]} as='ul' sx={{
                        justifyContent:"space-around",
                        'li':{
                            listStyleType:'none'
                        }
                    }}>
                        <li><Button onClick={()=>history.push(`/${path}`)}>Retour</Button></li>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}
export default FrontShowBox