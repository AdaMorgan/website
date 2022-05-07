import React from 'react';
import { HeaderMenu } from './header-menu/header-menu';
import Vector from '../../img/Vector.png'
import { ChangeThemeButton, HeaderButtonsBlock, HeaderLogoBlock, SignUpButton, StyledHeader } from './styled-header';
import { useState } from 'react';

export const Header = () => {
    const [isActive, setActive] = useState(false)
    
    const handleClick = () => {
        setActive(!isActive)
    }

    return (
        <StyledHeader>
            <HeaderLogoBlock>
                Tract.
            </HeaderLogoBlock>
            <HeaderMenu />
            <HeaderButtonsBlock>

                <ChangeThemeButton onClick={handleClick}>
                    <img src={Vector} style={isActive ? {opacity: "1", transition: "all .2s ease"} : {opacity: "0", transition: "all .2s ease"}} alt="" />
                </ChangeThemeButton>

                <SignUpButton>
                    Sign up
                </SignUpButton>

            </HeaderButtonsBlock>
        </StyledHeader>
    )
}