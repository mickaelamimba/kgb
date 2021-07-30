import DisplayTableUi from "../UI/TableUI/DisplayTableUi";
import React from "react";
import Configs from "../../Config/Config.json";



const TargetLists =()=>{
 return   <DisplayTableUi
     tableHeadProps={Configs.table.duplicateValue}
 >

    </DisplayTableUi>
}
export default TargetLists