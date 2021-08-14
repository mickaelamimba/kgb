
import React from "react";


export const dlArrayFormat=(array,arrayOdata, config)=>{
    return(
        <React.Fragment>
            {
                Object.entries(arrayOdata).map(([key,value])=>{
                    Object.entries(config).map(([labels,labelValue],i)=>{
                        if(key === labels){
                            array.push(
                                <dl key={i}>
                                    <dt>{labelValue}</dt>
                                    <dd>{value}</dd>
                                </dl>
                            )
                        }
                    })
                })
            }
        </React.Fragment>


    )

}