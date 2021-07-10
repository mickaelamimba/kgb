import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Padding from "../Padding";
import {fetchMission} from "../../../Store/Mission/missionSlice";
import Lists from "./Lists";
import {Box, Grid, Image, Input, Spinner} from "theme-ui";
import {useLocation, useParams} from "react-router";
import {Redirect} from "react-router-dom";


function Mission (){
    const {idMission}=useParams()
    const useQuery =()=>{
        return new URLSearchParams(useLocation().search)
    }
    const dispatch = useDispatch()
        const [searchValue,setSearchValue]=useState('')
        const [hasReseach,setHasReseach]=useState(false)
        useEffect(()=>{
            dispatch(fetchMission())
            if (hasReseach){
                setHasReseach(false)
            }


        },[hasReseach,dispatch] )


const query= useQuery()
    const id = query.get('idMission ')
    const mission = useSelector(state =>state.mission.missionEntities)
    mission.find(m=> mission.id ===parseInt(id))
    console.log(id)
    const padding = useSelector(state => state.mission.isLoading)
    const error = useSelector(state => state.mission.error)

    return(
        <React.Fragment>
        <Image as='svg' sx={{
            position :'absolute',
            zIndex : -2,
            top: 0,
            right:0
        }} id="Groupe_1" data-name="Groupe 1" xmlns="http://www.w3.org/2000/svg" width="781.677" height="642.211" viewBox="0 0 781.677 642.211">
            <path id="Tracé_1" data-name="Tracé 1" d="M940.606,771.106v-72.34S968.8,750.051,940.606,771.106Z" transform="translate(-209.162 -128.895)" fill="#f1f1f1"/>
            <path id="Tracé_2" data-name="Tracé 2" d="M942.348,771.093l-53.29-48.921S945.9,736.087,942.348,771.093Z" transform="translate(-209.162 -128.895)" fill="#f1f1f1"/>
            <circle id="Ellipse_44" data-name="Ellipse 44" cx="11.017" cy="11.017" r="11.017" transform="translate(227.41 0)" fill="#f1f1f1"/>
            <circle id="Ellipse_44-2" data-name="Ellipse 44" cx="11.017" cy="11.017" r="11.017" transform="translate(199.41 28)" fill="#f1f1f1"/>
            <circle id="Ellipse_44-3" data-name="Ellipse 44" cx="11.017" cy="11.017" r="11.017" transform="translate(192.41 525)" fill="#f1f1f1"/>
            <path id="Tracé_3" data-name="Tracé 3" d="M796.569,435.1" transform="translate(-209.162 -128.895)"/>
            <path id="Tracé_4" data-name="Tracé 4" d="M580.071,629.149H568.088l-.686-45.5,12.669-.717Z" fill="#9f616a"/>
            <path id="Tracé_5" data-name="Tracé 5" d="M792.3,769.671H753.639v-.5a15.068,15.068,0,0,1,15.051-15.051H792.3Z" transform="translate(-209.162 -128.895)" fill="#2f2e41"/>
            <path id="Tracé_6" data-name="Tracé 6" d="M648.668,615.343l-10.985,4.789L618.87,578.693l11.328-5.719Z" fill="#9f616a"/>
            <path id="Tracé_7" data-name="Tracé 7" d="M829.848,769.12l-.2-.458a15.051,15.051,0,0,1,7.783-19.812l21.643-9.435,6.214,14.255Z" transform="translate(-209.162 -128.895)" fill="#2f2e41"/>
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="25.965" cy="25.965" r="25.965" transform="translate(575.4 218.032)" fill="#9f616a"/>
            <path id="Tracé_8" data-name="Tracé 8" d="M647.842,593.621l-33.56-81.983,16.3-76.71-30.923-1.678-17.02,85.819,42.909,85.1Z" fill="#2f2e41"/>
            <path id="Tracé_9" data-name="Tracé 9" d="M611.165,419.586,595.344,517.63,590.587,611.6l-27.311-.24-1.013-179.79Z" fill="#2f2e41"/>
            <path id="Tracé_10" data-name="Tracé 10" d="M632.869,425.177l-1.556,14.2-77.42,3.464,5.242-21.353Z" fill="#cbcbcb"/>
            <path id="Tracé_11" data-name="Tracé 11" d="M768.414,580.879a9,9,0,0,1,1.535-12.708,9.257,9.257,0,0,1,1.251-.816l30.365-114.11,18,7.91-35.672,110.27a9.016,9.016,0,0,1-2.654,10.884A9.178,9.178,0,0,1,768.414,580.879Z" transform="translate(-209.162 -128.895)" fill="#9f616a"/>
            <path id="Tracé_12" data-name="Tracé 12" d="M787.606,423.849l3.581-7.4s17.634-15.245,36.234-6.106l2.867,8.54,15.17,24.5L842.031,556.53s-63.289-4.813-78.976.921l6.9-89.659Z" transform="translate(-209.162 -128.895)" fill="#3f3d56"/>
            <path id="Tracé_13" data-name="Tracé 13" d="M790.9,567.448l-26.722-7.475,24.713-77.236,2.238-43.122a15.592,15.592,0,0,1,5.821-11.25,19.165,19.165,0,0,1,14.8-4.08c8.732,1.2,15.155,7.873,15.273,15.877v.039l-.005.039-8.582,60.442-2.752,9.839Z" transform="translate(-209.162 -128.895)" fill="#cbcbcb"/>
            <path id="Tracé_14" data-name="Tracé 14" d="M822.3,393.244l5.911,1.494,8.958-9.524s16.464-38.191-19.925-44.035-28.442,8.91-33.307,18.163l14.869,3.866,13.382,13.68s8.732-6.4,11.3-.595S822.3,393.244,822.3,393.244Z" transform="translate(-209.162 -128.895)" fill="#2f2e41"/>
            <path id="Tracé_15" data-name="Tracé 15" d="M615.256,614.743H209.162V208.649H615.256Z" transform="translate(-209.162 -128.895)" fill="#fff"/>
            <path id="Tracé_16" data-name="Tracé 16" d="M615.256,614.743H209.162V208.649H615.256Zm-400.094-6H609.256V214.649H215.162Z" transform="translate(-209.162 -128.895)" fill="#e5e5e5"/>
            <rect id="Rectangle_1" data-name="Rectangle 1" width="260.441" height="9.194" transform="translate(83.731 254.329)" fill="#6c63ff"/>
            <rect id="Rectangle_2" data-name="Rectangle 2" width="260.441" height="9.194" transform="translate(83.731 278.233)" fill="#6c63ff"/>
            <rect id="Rectangle_3" data-name="Rectangle 3" width="260.441" height="9.194" transform="translate(83.731 302.136)" fill="#6c63ff"/>
            <circle id="Ellipse_2" data-name="Ellipse 2" cx="6" cy="6" r="6" transform="translate(61.922 254.273)" fill="#6c63ff"/>
            <rect id="Rectangle_4" data-name="Rectangle 4" width="260.441" height="9.194" transform="translate(83.731 151.329)" fill="#e5e5e5"/>
            <rect id="Rectangle_5" data-name="Rectangle 5" width="260.441" height="9.194" transform="translate(83.731 175.233)" fill="#e5e5e5"/>
            <rect id="Rectangle_6" data-name="Rectangle 6" width="260.441" height="9.194" transform="translate(83.731 199.136)" fill="#e5e5e5"/>
            <circle id="Ellipse_3" data-name="Ellipse 3" cx="6" cy="6" r="6" transform="translate(61.922 150.273)" fill="#e5e5e5"/>
            <rect id="Rectangle_7" data-name="Rectangle 7" width="260.441" height="9.194" transform="translate(83.731 358.329)" fill="#e5e5e5"/>
            <rect id="Rectangle_8" data-name="Rectangle 8" width="260.441" height="9.194" transform="translate(83.731 382.233)" fill="#e5e5e5"/>
            <rect id="Rectangle_9" data-name="Rectangle 9" width="260.441" height="9.194" transform="translate(83.731 406.136)" fill="#e5e5e5"/>
            <circle id="Ellipse_4" data-name="Ellipse 4" cx="6" cy="6" r="6" transform="translate(61.922 357.273)" fill="#e5e5e5"/>
            <path id="Tracé_17" data-name="Tracé 17" d="M989.838,770.849h-299a1,1,0,0,1,0-2h299a1,1,0,0,1,0,2Z" transform="translate(-209.162 -128.895)" fill="#cbcbcb"/>
        </Image>
            <Box  as='form'   sx={{
                width:185
            }}>

                <Input type="search"
                       name="mission"
                       placeholder='Recherche'
                       value={searchValue}
                       mb={3}
                       onChange={e=>setSearchValue(e.target.value)}
                />
            </Box>
        <Box m={0} as='section' sx={{

            overflow: 'auto',
            border:'1px solid #54627bb5',
            borderRadius : '4px',
        }} >
            {padding === 'load' ? (
                    <Spinner  />
            ) : (mission.length !== 0 ? (

                    <Lists
                        missions={mission}
                    />

                ) : error


            )}

        </Box>
        </React.Fragment>
    )

}

export default Mission