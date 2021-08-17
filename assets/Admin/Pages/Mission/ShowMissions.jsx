import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Box, Button, Flex, Grid, Spinner} from "theme-ui";
import {useQuery} from "react-query";
import { Missions} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";


import Configs from "../../Config/Config.json";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import Edit from "./Edit";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import ShowBoxArray from "../../Componets/UI/ShowBox/ShowBoxArray";

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
    if (isUpdate||isLoading){
        return<Flex sx={{justifyContent:'center', alignItems: 'center'}}><Spinner/></Flex>
    }
 return(
     <ShowBox path='missions'
              handleDelete={handleDelete}
     >
         <ShowBoxChild
             config={Configs.table.mission}
             arrayData={arrayOfMission}

         />
         <Grid as='dl' width={'auto'} columns={[1,2,3]}>
             <ShowBoxArray
                 title='Agents'
                 arrayData={agents}
                 config={Configs.table.agents}

             />
             <ShowBoxArray
                 title='Contact'
                 arrayData={contacts}
                 config={Configs.table.duplicateValue}

             />
             <ShowBoxArray
                 title='Cible'
                 arrayData={targets}
                 config={Configs.table.duplicateValue}
             />
         </Grid>


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