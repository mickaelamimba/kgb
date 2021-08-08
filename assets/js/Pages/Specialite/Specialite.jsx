import React from "react";
const Specialite =( {name})=>{
    return(
        <React.Fragment>
            <section>
                <h3>Spécialité</h3>
                <div>
                  <p>{name}</p>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Specialite