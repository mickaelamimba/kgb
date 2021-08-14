import React from "react";
import { useHistory} from "react-router-dom";

import {Button} from "theme-ui";

import {useParams} from "react-router";
import {useQuery} from "react-query";
import {Missions} from "../../../Admin/Func/apiUrl";


const Lists =()=>{
    const {id}=useParams()
    const history = useHistory();
    const {data:{...missions}, isLoading, isError}= useQuery('Missions',  ()=>Missions.fetchAll(1))
    const {...template} =missions["hydra:search"]
    const orders =template["hydra:template"]

    console.log(  missions)

    let variant

    status === 'En préparation' ? variant='cards.preparation' : status === 'en cours' ? 'cards.progress' :
    status === 'terminé' ? variant='cards.finished' :
    status === 'échec' ? variant='cards.failure' :variant='cards'


    return(
        <React.Fragment>


                 {
                            missions['hydra:member']?.map((data, i)=>{
                                return (
                                   <tr key={i}>
                                       <td>{data.title}</td>
                                       <td>{data.description.substr(0,50)+'...'}</td>
                                       <td>{data.codeName}</td>
                                       <td>{data.country}</td>
                                       <td>{data.status}</td>
                                       <td><Button variant ='simple' onClickCapture={()=>history.push(`missions/${data.id}`)}>Lire la suite</Button></td>
                                   </tr>
                                    )


                            })

                    }



        </React.Fragment>
    )
}
export default Lists