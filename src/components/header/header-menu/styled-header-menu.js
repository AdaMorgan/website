import styled from "styled-components";

export const StyledHeaderMenu = styled.div`
    display: flex;
    gap: 100px;
    margin-left: 100px;
    a {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 38px;
        text-transform: capitalize;
        color: #E7E7E7;
        opacity: 0.5;
        transition: all .2s ease;
    }
    .active-link {
        opacity: 1;
    }
`