import React from 'react';
import {Box, Container, Heading, MenuButton,Button} from "theme-ui";
import Sidebar from "../Sidebar/Sidebar";
import NaveItem from "../Sidebar/NaveItem";
import useSidebar from "../../../Hooks/useSidebar";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useOpenModal} from "../../../Context/OpenModalContext";
import {faOutdent} from "@fortawesome/free-solid-svg-icons";


const Layout =({children})=>{
    const modal =useOpenModal()
   const {Lists}= useSidebar()


    return(
        <React.Fragment>
            <Heading as='header'>

                <MenuButton m={2} color="white" bg='primary'  aria-label="Toggle Menu" onClick={modal.handleToggleMenu}  />


                <Sidebar toggle={modal.toggleMenu} onClose={modal.handleToggleMenu}>
                    <NaveItem>
                        {Lists.map(({path,name , icon},i)=>{
                           return <Box key={i} as='li' sx={{

                           }}>

                               <FontAwesomeIcon icon={icon} />


                               <Link onClick={modal.handleToggleMenu} to={path}>{name}</Link>


                            </Box>
                        })}
                         <li > <FontAwesomeIcon icon={faOutdent} /> <a href="/logout">Déconnexion</a></li>
                    </NaveItem>
                </Sidebar>
            </Heading>
            <Container >
                <main>
                    {children}
                </main>



            </Container>
            <Box as='footer'>

            </Box>

        </React.Fragment>
    )
}
export default Layout