import React from 'react';

import {Container, Heading} from "theme-ui";


function Layout({navBar,children}){
    return(
        <>
            <Heading as='header' mb={3}>
                {navBar}
            </Heading>
            <Container sx={{
                maxWidth:1024,
            }}  >
            <main>
                {children}
            </main>
            </Container>
        </>

    )
}

export default Layout