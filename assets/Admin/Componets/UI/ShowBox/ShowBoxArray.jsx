import {Box, Divider, Grid} from "theme-ui";
import React from "react";

const ShowBoxArray=({config,arrayData, title})=>{
    if(arrayData.length !== 0){
        let items=[]
        return(
            <Grid as='article' sx={{
                boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                borderRadius:4,
                p:3,

            }}>
                <h3>{title}</h3>

                {items}



                {arrayData.map((data,i)=>{

                    if(arrayData.length >= 2 && i>0){
                        items.push(< Divider key={Math.random()}/>)
                    }
                    Object.entries(data).map(([itemKey, item])=>{



                        Object.entries(config).map(([labels, labelValue])=>{

                            if(labels === itemKey){
                                items.push(

                                    <Grid as='section' gap={2} columns={[1,2]} key={Math.random()}>
                                        <dt>{labelValue}</dt>
                                        <dd>{item}</dd>

                                    </Grid>
                                )

                            }


                        })

                    })

                })




                }
            </Grid>
        )

    }else{
        return null
    }


}
export default ShowBoxArray