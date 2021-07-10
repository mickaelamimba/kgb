import {useDispatch, useSelector} from "react-redux";
import {deleteAgent, fetchAgent} from "../../Store/Agents/agentsSlice";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";




export default function  useListsAgents (){
    let match = useParams()
    console.log(match)
    const history=useHistory()
    const dispatch = useDispatch()
    const agentsListe =  useSelector(state => state.agents.agents['hydra:member'] )
    const totalItem =useSelector(state => state.agents.agents['hydra:totalItems'] )
    const isLoading = useSelector(state => state.agents.isLoading )


    const totalPages =  Math.ceil( totalItem / 13)

    let [page , setPage]= useState(1)
    const [lastPage , setLastPage]= useState(false)
    const [currentPage,setCurrentPage]=useState()
    const pageBox =()=>{
       let j=[]
        if(totalPages){
            for (let i = 0; i < totalPages; i++) {
                j.push(i+1)
            }
        }

      return j
    }

    const backPage=()=>{
        if(page <= 1){
                setPage( page -1)
            history.push(`/Admin/agents/${page}`)

            dispatch(fetchAgent(page))
            setLastPage(false)

        }
        setLastPage(true)
        setPage(match.id)
    }
    const nextPage =()=>{

        if(page <= totalPages){
                setPage( page +1)
            history.push(`/Admin/agents/${page}`)

            dispatch(fetchAgent(page))
            setLastPage(false)

        }
        setLastPage(true)
        setPage(match.id)
    }

 async function handleSubmit(e){
        dispatch(deleteAgent(e.target.value))

}
    useEffect(() =>{


                dispatch(fetchAgent(match.id))

    },[match.id,dispatch])

    return {agentsListe, isLoading, handleSubmit,pageBox,nextPage,page,lastPage,backPage}
}