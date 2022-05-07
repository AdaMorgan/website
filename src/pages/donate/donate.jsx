import React from 'react';
import { DonateComponent } from './donate-component/donate-component';
import { StyledDonate } from './styled-donate';

export const Donate = () => {
     const InitialState = [
        {
            name: "Standart",
            price: 7,
            info: "Standard package of services provided by the server.",
            power: 25,
            profit: 1200,
            bonus: 60,
            period: 30
        }, 
        {
            name: "Prem",
            price: 99,
            info: "Standard package of services provided by the server.",
            power: 25,
            profit: 2200,
            bonus: 60,
            period: 30
        },
        {
            name: "Prem",
            price: 499,
            info: "Standard package of services provided by the server.",
            power: 25,
            profit: 2200,
            bonus: 60,
            period: 30
        }
    ]

    console.log(InitialState)

    return (
        <StyledDonate 
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }}
        >
                {
                    InitialState.map((state, key) => (
                        <DonateComponent state={state} key={key} />
                    ))
                }
        </StyledDonate>
    )
}