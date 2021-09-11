import React from 'react'
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Box, Flex, Grid, Spinner} from "theme-ui";
import {useQuery} from "react-query";
import { Missions} from "../../Func/apiUrl";
import {useOpenModal} from "../../Context/OpenModalContext";


import Configs from "../../Config/Config.json";
import ShowBox from "../../Componets/UI/ShowBox/ShowBox";
import useMissionsCRUD from "../../Hooks/useMissionsCRUD";
import Edit from "./Edit";
import ShowBoxChild from "../../Componets/UI/ShowBox/ShowBoxChild";
import ShowBoxArray from "../../Componets/UI/ShowBox/ShowBoxArray";
import {formatDateInArray} from "../../Func/formtsDate";

const ShowMissions=()=>{

    const modal = useOpenModal()
 const{id} = useParams()
 const history = useHistory()
 const {data:{...mission}, isLoading, isError} = useQuery(['Missions', id], () => Missions.oneById(id),{
     enabled:modal.enabled
 })
 let match = useRouteMatch(['/Admin/missions/:id/show/'])
const {isUpdate,isUpdateSuccess,isUpdateError,mutateAsyncUpdate,mutateAsyncDelete}= useMissionsCRUD()
 const handleDelete = async()=>{
     modal.handleEnabled()
     await mutateAsyncDelete(id)
     history.push(`/Admin/missions`)

 }
    formatDateInArray(mission)
    const agent =[]
  const {endDate,startDate,agents,contacts,targets,stashs,specialties,...infosMission}= mission
    agents?.map(({agentSpecialties,...infoAgent})=>{
        agent.push(
            {
                ...infoAgent,
                specialties:agentSpecialties !== undefined && agentSpecialties?.map((v)=><Box pl={2} as='span' key={v.id}>{v.name}</Box>)
            }
        )
    })
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
     <React.Fragment>
     <ShowBox path='missions'
              handleDelete={handleDelete}
              isUpdateSuccess={isUpdateSuccess}
              isUpdateError={isUpdateError}
              headerTitle='de la mission'
     >
         <ShowBoxChild
             config={Configs.table.mission}
             arrayData={arrayOfMission}

         />
         <Grid as='dl' width={'auto'} columns={[1,2,3]}>
             <ShowBoxArray
                 title='Agents'
                 arrayData={agent}
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
     </React.Fragment>
 )
}
export default ShowMissions