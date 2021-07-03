import React from "react";
const Agent =({firstName,indentificationCode,lastName,nationality,birthDate})=>{
    return(
        <React.Fragment>
            <article>
                <h3>Agent</h3>
                <section>
                    <div>
                        <p>Non: <span>{lastName}</span></p>
                        <p>Prenom: <span>{firstName}</span></p>
                    </div>
                    <div>
                        <p>Nationaliter : <span>{nationality}</span></p>
                        <p>Code d'idetification : <span>{indentificationCode}</span></p>
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
export default Agent