import React from 'react';
import {Link, useHistory} from "react-router-dom";
const MenuItem =({path,name})=>{

    return(

            <li>

                <Link to={path}>{name}</Link>
            </li>
    )
}
export default MenuItem