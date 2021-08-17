import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Box, Button, Spinner} from "theme-ui";
import {useQuery} from "react-query";
import { Missions} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";


import Configs from "../../Config/Config.json";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import Edit from "./Edit";

const ShowMissions=()=>{

 const{id} = useParams()
 const history = useHistory()
 const {data:{...mission}, isLoading, isError} = useQuery(['Missions', id], () => Missions.oneById(id))
 let match = useRouteMatch(['/Admin/missions/:id/show/'])
 const modal = useOpenModal()
    const {isUpdate,isUpdateSuccess,isUpdateError,mutateAsyncUpdate}= useMissionsCRUD()
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
  const defaultValues={
      ...arrayOfMission,
      agents:agents?.map(agent => `/api/agents/${agent.id}`),
      contacts:contacts?.map(contact => `/api/contacts/${contact.id}`),
      targets:targets?.map(target=> `/api/targets/${target.id}`),
      specialties:`/api/specialties/${specialties?.id}`,
      stashs:`/api/stashs/${stashs?.id}`,

  }

 const missions =[]

const  handleModify = async(data)=>{
     await mutateAsyncUpdate({
         id: id,
         newData: data
     })
    modal.handleOpenModalUpdate()
}
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
         {
             modal.openModalUpdate&&
             <Edit
                 close={modal.handleOpenModalUpdate}
                 defaultValues={defaultValues}
                 onSubmit={handleModify}
             />
         }

     </ShowBox>
 )
}
export default ShowMissions