import styled from "styled-components";

export const StyledDonateComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 30px 29px 75px 29px;
    h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 50px;
        text-transform: uppercase;
        color: #E7E7E7;
        position: relative;
        height: 45px;
        &:before {
            content: '';
            position: absolute;
            width: 70px;
            height: 8px;
            background: #E7E7E7;
            top: 0px;
            margin-left: 9px;
            border-radius: 45px;
        }
    }
    &:nth-child(1) {
        background: #252525;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 45px;
        h4 {
            &:before {
                background: #E14A09;
            }
        }
    }
    &:nth-child(2) {
        background: linear-gradient(96.56deg, #F95A0E 0%, #F74757 58.71%, #D131C3 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 45px;
        div {
            button {
                background: linear-gradient(0deg, #313131, #313131);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 180px;
            }
        }
    }
    &:nth-child(3) {
        background: #252525;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 45px;
        h4 {
            &:before {
                background: #FF00E5;
            }
        }
    }
    h6 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.4px;
        line-height: 28px;
        text-indent: 15px;
        color: #E7E7E7;
    }
`

export const DonatePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    span {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 600;
        font-size: 42px;
        color: #E7E7E7;
        gap: 3px;
        h5 {
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            color: #E7E7E7
        }
    }
    button {
        background: linear-gradient(96.56deg, #F95A0E 0%, #F74757 58.71%, #D131C3 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 180px;font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 34px;
        text-transform: capitalize;
        color: #E7E7E7;
        padding: 3px 45px;
        border: none;
        cursor: pointer;
    }
`

export const DonateOpportunities = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    * {
        display: flex;
        justify-content: space-between;
        span {
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 38px;
            color: #E7E7E7;
        }
    }
`

export const FirstOpportunity = styled.div`
`

export const SecondOpportunity = styled.div`

`

export const Thirdpportunity = styled.div`

`

export const FourthOpportunity = styled.div`

`