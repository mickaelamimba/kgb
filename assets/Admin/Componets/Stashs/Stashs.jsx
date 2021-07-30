
import React from 'react';
import BoxHeading from "../UI/BoxHeading/BoxHeading";
import Configs from "../../Config/Config.json";
import useStashs from "../../Hooks/useStashs";
import DisplayTableUi from "../UI/TableUI/DisplayTableUi";
import Create from "../UI/FormBox/Create";
import FormStashs from "./FormStashs";
import {useRouteMatch} from "react-router-dom";
const Stashs =()=>{
    let match = useRouteMatch(['/Admin/stashs/:id'])
    const {isLoading,handleOpenModal, openModal, create,Lists, onSubmit,  handleOpenModalUpdate,onSubmitUpdate,
        update,openModalUpdate,valueUpdate}= useStashs()
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
                           onSubmit={onSubmit}
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