import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`
export const ProductsDiv = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const ProductInfo = styled.div`
    
`

export const ProductPicture = styled.div`
    width: 280px;
    height: 280px;
    margin-top: 5px;
    display: flex;
`
export const ContainerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`
export const OffDiv = styled.div`
    position: absolute;
    background-color: var(--pink);
    color: var(--white);
    border-radius: 10px;
    height: 25px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 30px;
    font-weight: bold;
`
export const InfoDiv = styled.div`
    display: flex;
    width: 280px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

export const ConditionDiv = styled.div`
    display: flex;
    color: var(--blackblue);
`

export const PricesDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 65%;
    align-items: center;
`

export const NewPrice = styled.p`
    color: var(--pink);
    font-weight: bold;
`
export const OldPrice = styled.p`
    color: var(--mediungray);
    text-decoration: line-through;
    font-size: 14px;
`
export const ProductName = styled.p`
    color: var(--blackblue);
    font-weight: 500;
    margin-top: 10px;
`