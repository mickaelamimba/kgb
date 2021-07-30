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
                path:'/Admin/specialite/1',
                name:'Spécialités',
                icon: faUserGraduate
            },
            {
                path:'/Admin/missions/1',
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
                path:'/Admin/contacts/1',
                name:'Contacts',
                icon: faIdCard
            },
            {
                path:'/Admin/stashs/1',
                name:'Planques',
                icon:faTintSlash
            }

        ]
    return{Lists, onClick,toggleMenu,onClose}
}