import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Box, Button, Spinner} from "theme-ui";
import {useQuery} from "react-query";
import {Agents, Missions} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Configs from "../../Config/Config.json";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";

const ShowMissions=()=>{
 const pen = <FontAwesomeIcon icon={faPen}/>
 const trash = <FontAwesomeIcon icon={faTrashAlt} color='red'/>
 const{id} = useParams()
 const history = useHistory()
 const {data:{...mission}, isLoading, isError} = useQuery(['Mission', id], () => Missions.oneById(id))
 let match = useRouteMatch(['/Admin/missions/:id/show/'])
 const modal = useOpenModal()
 const handleDelete =(id)=>{
  console.log(id)
 }
  const {endDate,startDate,agents,contacts,targets,stashs,specialties,...infosMission}= mission
 const arrayOfMission =
  {
   ...infosMission,
   endDate: endDate !== undefined && new Date(endDate).toISOString().slice(0, 10),
   startDate: startDate !== undefined && new Date(startDate).toISOString().slice(0, 10),
   stashs: stashs !== undefined && stashs.code,
   specialties:specialties !== undefined &&  specialties.name
  }


 const missions =[]
 console.log(agents)
 return(
     <ShowBox path='missions'
              deleteId={id}
              handleDelete={handleDelete}
     >
      <dl>
       {isLoading&& <Spinner/>}
        {missions}
      </dl>
          {agents?.map(({firstName, lastName},i)=>{
           return(
               <div key={i}>
                   <h3>Agents</h3>
                   <ul>
                       <li> {firstName }  {lastName}</li>
                   </ul>
               </div>

          )
          })}
         {contacts?.map(({firstName, lastName},i)=>{
             return(
                 <div key={i}>
                     <h3>Contact</h3>
                     <ul>
                         <li> {firstName }  {lastName}</li>
                     </ul>
                 </div>

             )
         })}
         {targets?.map(({firstName, lastName},i)=>{
             return(
                 <div key={i}>
                     <h3>Cibles</h3>
                     <ul>
                         <li> {firstName }  {lastName}</li>
                     </ul>
                 </div>

             )
         })}


       {
        Object.entries(arrayOfMission).map(([key,value])=>{

         Object.entries(Configs.table.mission).map(([labels,labelValue],i)=>{
           if(key === labels){

            missions.push(
                <div key={i}>
                 <dt>{labelValue}</dt>
                 <dd>{value}</dd>
                </div>
            )
           }
         })

        })

       }







     </ShowBox>
 )
}
export default ShowMissions