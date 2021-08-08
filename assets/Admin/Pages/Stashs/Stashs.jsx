
import React from 'react';
import BoxHeading from "../../Componets/UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";
import DisplayTableUi from "../../Componets/UI/TableUI/DisplayTableUi";
import Create from "../../Componets/UI/FormBox/Create";
import FormStashs from "./FormStashs";
import {useRouteMatch} from "react-router-dom";
import useStashsCRUD from "../../Hooks/useStashsCRUD";
import Lists from "./Lists";
const Stashs =()=>{
    let match = useRouteMatch(['/Admin/stashs/:id'])
    const {isLoading,handleOpenModal, openModal, create, handleAdde,  handleOpenModalUpdate,onSubmitUpdate,
        update,openModalUpdate,valueUpdate}= useStashsCRUD()
   return(
       <BoxHeading
           title={Configs.componentInfos.stashs.headerTitle}
           handleOpenModal={handleOpenModal}
           btnTitle={Configs.componentInfos.stashs.button}
       >
           <DisplayTableUi
               isLoading={isLoading}
               tableHeadProps={Configs.table.stashs}
           >
               <Lists/>

           </DisplayTableUi>
           {openModal && create ?
               <Create
                   formTitleBtn={'Ajouter une Planque'}
                   close={handleOpenModal}
               >
                   {
                       <FormStashs
                           onSubmit={handleAdde}
                       />
                   }

               </Create>: openModalUpdate &&
                   <Create
                       formTitleBtn={'Modifier une Planque'}
                       close={handleOpenModalUpdate}
                   >
                       {
                           <FormStashs
                               onSubmit={onSubmitUpdate}
                               valueUpdate={valueUpdate}

                           />
                       }

                   </Create>

           }

       </BoxHeading>
   )
}

export default Stashs