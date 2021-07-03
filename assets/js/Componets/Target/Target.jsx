import React from "react";
const Target =( {lastName,firstName,nationality,codeName,birthDate})=>{
    return(
        <React.Fragment>
            <article>
                <h3>cibles </h3>
                <section>
                    <div>
                        <p>Non: <span>{lastName}</span></p>
                        <p>Prenom: <span>{firstName}</span></p>
                    </div>
                    <div>
                        <p>Nationaliter : <span>{nationality}</span></p>
                        <p>Code d'idetification : <span>{codeName}</span></p>
                    </div>
                </section>
                <div>
                    <p>
                        {
                            new Date(birthDate).toDateString()
                        }
                    </p>
                </div>
            </article>
        </React.Fragment>
    )
}
export default Target