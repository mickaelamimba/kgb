import React from 'react';
import {Box, Button, Paragraph, Spinner} from "theme-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../UI/Pagination/Pagination";
import {Link, useHistory} from "react-router-dom";

const List =({agents, loading,handleSubmit,pageBox,nextPage, page, lastPage,backPage})=>{
    const history =useHistory()
    const pen =<FontAwesomeIcon icon={faPen} color='warning' />
    const trash = <FontAwesomeIcon icon={faTrashAlt} color='danger'/>
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
            'th, td':{
                padding:2,
                textAlign:'center',
            },
            'tr:nth-child(even)':{
                backgroundColor:'muted'
            }


        }
    }}>
        {
            loading === 'load' ?
                <Spinner/>:agents ?
                <table>
                    <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Date de naissance</th>
                        <th>Code d'identification</th>
                        <th>Nationalité</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        agents.map(({id,firstName,lastName,birthDate, indentificationCode,nationality})=>{
                           return <tr key={id}>
                               <td>{firstName}</td>
                               <td>{lastName}</td>
                               <td>{new Date(birthDate).toDateString()}</td>
                               <td>{indentificationCode}</td>
                               <td>{nationality}</td>
                               <td>
                                   <Paragraph  as='span'>{pen}</Paragraph>
                                   <Paragraph pl={2} as='span' await onClick={handleSubmit} value={id}>{trash}</Paragraph>
                               </td>


                            </tr>

                        })
                    }

                    </tbody>

                </table>:null

        }

    </Box>
    <Pagination nextPage={nextPage} page={page} lastPage={lastPage} backPage={backPage}>

        {pageBox().map((item,i)=>{

            return (<Box key={i} onClickCapture={()=>history.push(`/Admin/agents/${item}`)}>{item}</Box>)

        })}
    </Pagination>
        </React.Fragment>
    )



}
export default  List