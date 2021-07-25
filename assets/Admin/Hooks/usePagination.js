import React, {useState} from "react";
import {Box} from "theme-ui";

export const usePagination =(totalItem,itemPerPage, paginate)=>{
    const pageNumber =[]
    const totalPages = Math.ceil( totalItem / itemPerPage)
    const [currentPage, setCurrentPage]=useState({selected:1})
    const [previous, setPrevious]=useState(0)
    const [next, setNext]=useState(0)
    const [PagesNumberLimit, setPagesNumberLimit]=useState(totalPages)
    const [maxPagesNumberLimit, setMaxPagesNumberLimit]=useState(totalPages)
    const [minPagesNumberLimit, setMinPagesNumberLimit]=useState(0)
    let j=0
    do {
        j+=1
        pageNumber.push(j)
    } while (j < totalPages)

    const handlePrevious =()=>{
        setCurrentPage({selected: currentPage.selected +1})
        return paginate({ selected :currentPage.selected })

    }
    const handleNext = ()=>{

        setCurrentPage({selected: currentPage.selected -1})
        return paginate({ selected :currentPage.selected })


    }


    const handleClick=(e)=>{
        setCurrentPage({ selected :e})
        return paginate({ selected :e})
    }
    const randNumberPage = pageNumber.map((number)=>{
        return(
            <Box as="li" bg={currentPage.selected === number ? 'primary':null} key={number} onClick={()=>handleClick(number)}>
                {number}
            </Box>
        )})
    return{handlePrevious,handleNext,handleClick,randNumberPage,currentPage,pageNumber }

}
