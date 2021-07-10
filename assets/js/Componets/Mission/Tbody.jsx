import React from "react";
import {Box, Button} from "theme-ui";
import {useHistory} from "react-router-dom";
const Tbody = ({id,title,description, codeName, country ,status})=>{
   const history =useHistory()
    return(
        <React.Fragment>
            <Box as='tr' sx={{
                backgroundColor:'muted',
                ':nth-child(even)':{
                    backgroundColor:'primaryMuted'
                }
                ,
                'td':{
                    padding:'10px 16px',
                    borderTop: '1px solid #54627bb5'
                }
            }} >
                <td>
                    {title}
                </td>
                <td>
                    {description.substr(0,50)+'...'}
                </td>
                <td>
                    {codeName}
                </td>
                <td>
                    {country}
                </td>
                <td>
                    {status}
                </td>
                <td>
                    <Button variant ='simple' onClickCapture={()=>history.push(`missions/${id}`)}>Lire la suite</Button>
                </td>
            </Box>

            </React.Fragment>
    )

}
export default Tbody;