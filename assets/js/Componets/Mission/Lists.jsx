import React from "react";
import { useHistory} from "react-router-dom";

import {Button, Card, Heading, Paragraph, Box, Input} from "theme-ui";
import Table from "./Table";
import Tbody from "./Tbody";


const Lists =({missions})=>{

    let variant

    status === 'En préparation' ? variant='cards.preparation' : status === 'en cours' ? variant='cards.progress' :
    status === 'terminé' ? variant='cards.finished' :
    status === 'échec' ? variant='cards.failure' :variant='cards'


    return(
        <React.Fragment>

                <Table>
                    {
                            missions.map((data, i)=>{
                                return (
                                    <Tbody key={i}
                                           {...data}

                                    />
                                    )


                            })

                    }
                </Table>


        </React.Fragment>
    )
}
export default Lists