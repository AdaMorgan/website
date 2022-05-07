import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 75px;
    a, span {
        color: rgba(83, 83, 83, 0.9);
    }
`

export const FooterPolicyBlock = styled.div`
    a {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 38px;
    }
`

export const FooterSocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    a {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 38px;
        display: flex;
    }
`

export const FooterAuthorizedBlock = styled.div`
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 38px;
    }
`