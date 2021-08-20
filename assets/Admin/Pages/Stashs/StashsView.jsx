
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";

import Create from "../../Componets/UI/FormBox/Create";
import FormStashs from "./FormStashs";
import {useRouteMatch} from "react-router-dom";
import useStashsCRUD from "../../Hooks/useStashsCRUD";

import Table from "./Table";
import TablesCard from "../../Componets/UI/TableUI/TablesCard";
import {useOpenModal} from "../../Context/OpenModalContext";
const StashsView =()=>{
    document.title='Cibles'
    let match = useRouteMatch(['/Admin/stashs/:id'])
    const {handleAdde, isError,isSuccess}= useStashsCRUD()
    const modal =useOpenModal()
   return(
       <BoxHeading
           title={Configs.componentInfos.stashs.headerTitle}
           handleOpenModal={modal.handleOpenModal}
           btnTitle={Configs.componentInfos.stashs.button}
           isError={isError}
           isSuccess={isSuccess}
       >
           <TablesCard>
               <Table/>
           </TablesCard>


           {modal.openModal &&
               <Create
                   formTitleBtn={'Ajouter une Planque'}
                   close={modal.handleOpenModal}
               >
                   {
                       <FormStashs
                           onSubmit={handleAdde}
                       />
                   }

               </Create>

           }

       </BoxHeading>
   )
}

export default StashsView