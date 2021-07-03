import React from 'react'
import Agent from "../Agents/Agent";
import Specialite from "../Specialite/Specialite";
import Stashs from "../Stashs/Stashs";
import Target from "../Target/Target";
const MissionOneById =({title,codeName, description, country,missionType,
                           status,agentMission,endDate,startDate,specialtieMission,
                           stashMission,targetMission})=>{

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
                    <div>
                        <p>debut: <span>{new Date(startDate).toDateString()}</span></p>
                        <p>fin: <span>{new Date(endDate).toDateString()}</span></p>
                    </div>

                </article>
            </section>
            <Specialite {...specialtieMission}/>
            {
                agentMission.map((agent,i)=>{
                   return <Agent key={i}
                        {...agent}/>
                })
            } {
            stashMission.map((stash,i)=>{
                   return <Stashs key={i}
                        {...stash}/>
                })
            }{
            targetMission.map((target,i)=>{
                   return <Target key={i}
                        {...target}/>
                })
            }


        </React.Fragment>)
}
export default MissionOneById