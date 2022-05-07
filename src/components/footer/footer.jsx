import React from 'react';
import { Link } from 'react-router-dom';
import { FooterAuthorizedBlock, FooterPolicyBlock, FooterSocialLinks, StyledFooter } from './styled-footer';

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterPolicyBlock>
                <Link to="#">Privacy Policy</Link>
            </FooterPolicyBlock>
            <FooterSocialLinks>
                <Link to="#">Discord</Link>
                <Link to="#">Telegram</Link>
            </FooterSocialLinks>
            <FooterAuthorizedBlock>
                <span>Copyright 2022</span>
            </FooterAuthorizedBlock>
        </StyledFooter>
    )
}