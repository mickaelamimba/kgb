import {useSelector} from "react-redux";

export const setPaginationItemsPerPage =(totalItem)=>{

    const totalPages =  Math.ceil( totalItem / 13)
    return{totalPages, totalItem,}
}