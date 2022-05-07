import React from 'react';
import { DonateOpportunities, DonatePrice, FirstOpportunity, FourthOpportunity, SecondOpportunity, StyledDonateComponent, Thirdpportunity } from './styled-donate-component';

export const DonateComponent = ({state}) => {
    return (
        <StyledDonateComponent>
            <h4>{state.name}</h4>
            <DonatePrice>
                <span>
                    <h5>$</h5> <p>{state.price}</p>
                </span>
                <button>
                    Buy
                </button>
            </DonatePrice>
            <h6>{state.info}</h6>
            <DonateOpportunities>
                <FirstOpportunity>
                    <span>POWER</span>
                    <span>{state.power} Th/S</span>
                </FirstOpportunity>

                <SecondOpportunity>
                    <span>PROFIT</span>
                    <span>${state.profit}</span>
                </SecondOpportunity>

                <Thirdpportunity>
                    <span>BONUS</span>
                    <span>+{state.bonus}%</span>
                </Thirdpportunity>

                <FourthOpportunity>
                    <span>PERIOD</span>
                    <span>{state.period} Days</span>
                </FourthOpportunity>
            </DonateOpportunities>
        </StyledDonateComponent>
    )
}