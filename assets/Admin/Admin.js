import React from 'react';
import {Link} from "react-router-dom";
const Admin =()=>{
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/admin/agent'>Agent</Link>
                    </li>
                    <li>
                        <Link to='/admin'>Admin</Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}
export default Admin