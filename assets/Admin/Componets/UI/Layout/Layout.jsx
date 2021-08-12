import React from 'react';
import {Box, Container, Heading, MenuButton} from "theme-ui";
import Sidebar from "../Sidebar/Sidebar";
import NaveItem from "../Sidebar/NaveItem";
import useSidebar from "../../../Hooks/useSidebar";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useOpenModal} from "../../../Context/OpenModalContext";


const Layout =({children})=>{
    const modal =useOpenModal()
   const {Lists}= useSidebar()
    return(
        <React.Fragment>
            <Heading as='header'>
                <MenuButton aria-label="Toggle Menu" onClick={modal.handleToggleMenu} />
                <Sidebar toggle={modal.toggleMenu} onClose={modal.handleToggleMenu}>
                    <NaveItem>
                        {Lists.map(({path,name , icon},i)=>{
                           return <Box key={i} as='li' sx={{
                               position: 'relative',
                               cursor: 'pointer',
                               fontSize: '1.6em',
                               padding: '15px 30px',
                               transition: 'all 250ms',

                               '&:hover':{
                                   padding:' 15px 45px',
                                   backgroundColor: 'primaryMuted'
                               },
                               'a':{
                                   color:'background',
                                   textDecoration:'none',
                                   paddingLeft:12
                               }
                           }}>

                               <FontAwesomeIcon icon={icon} />

                               <Link onClick={modal.handleToggleMenu} to={path}>{name}</Link>
                            </Box>
                        })}
                    </NaveItem>
                </Sidebar>
            </Heading>
            <Container p={4}>
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