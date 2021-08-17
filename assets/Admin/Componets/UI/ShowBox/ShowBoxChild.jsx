import React from "react";

const ShowBoxChild =(arrayData,config)=>{
    return(
        <React.Fragment>
            {

                Object.entries(arrayData).map(([key,value])=>{
                    Object.entries(config).map(([labels,labelValue],i)=>{
                        console.log(arrayData,':', config)
                        if(key === labels){

                            return(

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
export default ShowBoxChild