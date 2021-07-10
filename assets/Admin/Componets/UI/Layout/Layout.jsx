import React from 'react';
import {Box, Container, Heading, MenuButton} from "theme-ui";
import Sidebar from "../Sidebar/Sidebar";
import NaveItem from "../Sidebar/NaveItem";
import useSidebar from "../../../Hooks/useSidebar";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Layout =({children})=>{
   const {Lists,onClick,toggleMenu,onClose}= useSidebar()
    return(
        <React.Fragment>
            <Heading as='header'>
                <MenuButton aria-label="Toggle Menu" onClick={onClick} />
                <Sidebar toggle={toggleMenu} onClose={onClose}>
                    <NaveItem>
                        {Lists.map(({path,name , icon},i)=>{
                           return <Box key={i} as='li' sx={{
                               position: 'relative',
                               cursor: 'pointer',
                               fontSize: '2em',
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

                               <Link onClick={onClose} to={path}>{name}</Link>
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