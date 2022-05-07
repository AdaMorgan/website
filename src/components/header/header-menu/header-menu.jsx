import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeaderMenu } from './styled-header-menu';

export const HeaderMenu = () => {

    const setActive = ({isActive}) => isActive ? 'active-link' : ''

    return (
        <StyledHeaderMenu>
            <NavLink to="/" className={setActive}>Home</NavLink>
            <NavLink to="/donate" className={setActive}>Donate</NavLink>
        </StyledHeaderMenu>
    )
}