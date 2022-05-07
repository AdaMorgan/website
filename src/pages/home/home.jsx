import React from 'react';
import { StyledHome } from './styled-home';

export const Home = () => {
    return (
        <StyledHome
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }}
        >
            <h2>Login to Your Account</h2>
            <h3>Now there are 130,000 users on the servers</h3>
        </StyledHome>
    )
}