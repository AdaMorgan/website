import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 75px;
    button {
        cursor: pointer;
    }
`

export const HeaderLogoBlock = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 50px;
    text-transform: capitalize;
    color: #E7E7E7;

`

export const HeaderButtonsBlock = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export const ChangeThemeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 8px;
    border: 1px solid #7E7E7E;
    width: 35px;
    height: 36px;
    border-radius: 10px;
    img {
        user-select: none;
    }
`

export const SignUpButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 34px;
    background: linear-gradient(264.29deg, #FF6B00 -31.16%, #BB3834 21.24%, #680D64 115.06%);
    border-radius: 10px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: rgba(216, 216, 216, 0.9);
`