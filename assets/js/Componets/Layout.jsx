import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
const Wrapper = styled.div`
    padding :2rem;
`;
const HeaderWrapper = styled.header`
display: flex;
`;

function Layout({children}){
    return(
        <Wrapper>
            <HeaderWrapper>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Mission</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Admin</Link>
                            </li>


                        </ul>
                    </nav>
            </HeaderWrapper>
            <main>
                {children}
            </main>
        </Wrapper>

    )
}

export default Layout