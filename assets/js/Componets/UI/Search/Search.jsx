import React from 'react';
import {Input} from "theme-ui";

const Search = ({searchText,handleSearch})=>{
    return(


        <Input type="text"
               name="mission"
               placeholder='Recherche'
               onChange={handleSearch}
               value={searchText}
               mb={3}

        />
    )
}
export default Search