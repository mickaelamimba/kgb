import React from 'react';
import NavBar from "./NavBar";
import MenuItem from "./MenuItem";

const Menu =(lists)=>{
    return(
        <NavBar>
            {
                lists.map((item ,i)=>{
                  return  <MenuItem key={i}
                  path={item.path}
                   name={item.name}
                  />
                })
            }


        </NavBar>
    )
}
export default Menu