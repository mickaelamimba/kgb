
import {faHome, faIdCard, faUserGraduate,faUserTie, faUserTag, faBriefcase, faTintSlash} from '@fortawesome/free-solid-svg-icons'

export default function useSidebar(){

    const Lists =
        [
            {
                path:'/Admin',
                name:'Home',
                icon: faHome
            },
            {
                path:'/Admin/agents',
                name:'Agents',
                icon: faUserTie
            },
            {
                path:'/Admin/specialities',
                name:'Spécialités',
                icon: faUserGraduate
            },
            {
                path:'/Admin/missions',
                name:'Missions',
                icon:faBriefcase
            }
            ,
            {
                path:'/Admin/targets',
                name:'Cibles',
                icon: faUserTag
            },
            {
                path:'/Admin/contacts',
                name:'Contacts',
                icon: faIdCard
            },
            {
                path:'/Admin/stashs',
                name:'Planques',
                icon:faTintSlash
            }

        ]
    return{Lists}
}