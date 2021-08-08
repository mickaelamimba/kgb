import React from "react";
const Stashs =( {code,address, country,type})=>{
    return(
        <React.Fragment>
            <section>
                <h3>planques</h3>
                <div>
                    <p>code : <span>{code}</span></p>
                    <address>
                        {address}
                    </address>
                    <p>{country}</p>
                    <p>type : {type}</p>
                </div>

            </section>
        </React.Fragment>
    )
}
export default Stashs