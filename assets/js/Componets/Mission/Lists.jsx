import React from "react";
import { useHistory} from "react-router-dom";


const Lists =({id,title,codeName, description, country,missionType,status})=>{
    let history=useHistory()

    return(
        <React.Fragment>
            
            <section>
                <h2>{title}</h2>
                <div>
                    <p>type de mission : <span>{missionType}</span></p>
                    <p>statut : <span>{status}</span> </p>
                </div>
                <article>
                    <p>{description}</p>
                    <div>
                        <p>Non de code : <span>{codeName}</span></p>
                        <p>Pays : <span>{country}</span></p>
                    </div>
                    <button onClick={()=>history.push(`/missions/${id}`)}>Lire la suite </button>
                </article>
            </section>
        </React.Fragment>
    )
}
export default Lists