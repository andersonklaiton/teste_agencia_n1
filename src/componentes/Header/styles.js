import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--pink);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 13px;
    color: var(--white);
    gap: 9px;
    padding: 6px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    @media(min-width:580px){
        height:50px ;
        font-size:15px;
        justify-content: space-evenly;
    }
`
export const ChangeDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const TruckDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    @media(max-width:580px){
        display:none ;
    }
`

export const CardDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    @media(max-width:580px){
        display:none ;
    }
`
