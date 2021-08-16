import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Container} from "theme-ui";
const Wrapper = styled.div`
    padding :2rem;
`;
const HeaderWrapper = styled.header`
display: flex;
`;

function Layout({navBar,children}){
    return(
        <Wrapper>
            <HeaderWrapper>
                {navBar}
            </HeaderWrapper>
            <Container sx={{
                maxWidth:1024,
            }}  >
            <main>
                {children}
            </main>
            </Container>
        </Wrapper>

    )
}

export default Layout