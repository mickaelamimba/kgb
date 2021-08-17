import React from "react";

const ShowBoxChild =({arrayData, config})=>{
    let result =[]

    return(
        <React.Fragment>

            <dl>
                {result}
            </dl>
            {

                Object.entries(arrayData).map(([key,value])=>{
                    Object.entries(config).map(([labels,labelValue],i)=>{
                        if(key === labels){
                            result.push(

                                <div key={i}>

                                    <dt>{labelValue}</dt>
                                    <dd>{value}</dd>
                                </div>
                            )
                        }
                    })
                })
            }

        </React.Fragment>


    )

}
export default ShowBoxChild