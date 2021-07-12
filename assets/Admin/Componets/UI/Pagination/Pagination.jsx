import React, {useState} from 'react';
import {Box, Button} from "theme-ui";



const Pagination =({totalItem,itemPerPage,paginate,previousLabel = null,nextLabel=null})=>{

    const pageNumber =[]
    console.log(pageNumber)
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
    const handleNext = async ()=>{

        setCurrentPage({selected: currentPage.selected -1})
       return paginate({ selected :currentPage.selected })


    }


     const handleClick=async (e)=>{
        setCurrentPage({ selected :e})
        return paginate({ selected :e})
    }

const randNumberPage = pageNumber.map((number)=>{
    return(
    <Box as="li" bg={currentPage.selected === number ? 'primary':null} key={number} onClick={()=>handleClick(number)}>
        {number}
    </Box>
)})



    return(
        <Box sx={{
            'ul':{
                display: "flex",
                listStyle:'none',
                '> li':{
                    padding:'8px 16px',
                    borderColor: 'muted',
                    border:'1px solid',
                    transition: 'background-color .3s',
                    cursor:'pointer',

                },
                button:{
                    all:"unset",
                    cursor:'pointer',
                    '&:hover':{
                        backgroundColor:'none'
                    }


                }
            }

        }}>
            <ul>
                {previousLabel ?
                    <li >
                        <Button await onClick={handlePrevious}
                                disabled={currentPage.selected == pageNumber.length ? true : false}
                        >{previousLabel} </Button>

                    </li>:null

                }

                {randNumberPage}

                {nextLabel ?
                    <li>
                        <Button await onClick={handleNext}
                                disabled={currentPage.selected === 1 ? true : false}
                        >{nextLabel} </Button>

                    </li>:null}

            </ul>
        </Box>

    )
}
export default Pagination