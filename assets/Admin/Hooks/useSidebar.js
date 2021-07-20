import {useState} from "react";
import {faHome, faIdCard, faUserGraduate,faUserTie, faUserTag, faBriefcase, faTintSlash} from '@fortawesome/free-solid-svg-icons'

export default function useSidebar(){
    const [toggleMenu, setToggleMenu] =useState(false)
    const onClick=()=>{
        setToggleMenu(true)
    }
    const onClose=()=>{
        setToggleMenu(false)
    }
    const Lists =
        [
            {
                path:'/Admin',
                name:'Home',
                icon: faHome
            },
            {
                path:'/Admin/agents/1',
                name:'Agents',
                icon: faUserTie
            },
            {
                path:'/Admin/specialite',
                name:'Spécialités',
                icon: faUserGraduate
            },
            {
                path:'/Admin/mission',
                name:'Missions',
                icon:faBriefcase
            }
            ,
            {
                path:'/Admin/target',
                name:'Cibles',
                icon: faUserTag
            },
            {
                path:'/Admin/contact',
                name:'Contact',
                icon: faIdCard
            },
            {
                path:'/Admin/stashs',
                name:'Planques',
                icon:faTintSlash
            }

        ]
    return{Lists, onClick,toggleMenu,onClose}
}