import styled from "styled-components";
import agencia_logo from "../../assets/agencia_logo.png"

export const MenuDiv = styled.div`
width: 100vw;
  height: 55px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 800px) {
    height: 90px;
  }
`
export const ButtonRaiz = styled.button`
background:url(${agencia_logo}) ;
width:106px;
height:24px;
background-repeat:no-repeat;
    border: none;
    cursor: pointer;
@media(min-width:800px){
    margin-left:20px
}
`
export const MenuList = styled.div`
@media (min-width: 800px) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
`
export const ContainerButtons = styled.div`
display: none;
@media (min-width: 800px) {
  display: flex;
    width: 480px;
    justify-content: space-between;
    }
`
export const ButtonPath = styled.button`

    border: none;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;

    @media (max-width: 579px) {
      width: 100%;
      display: flex;
      align-items: center;
    }
    
`
export const ButtonMenu = styled.button`
width: 40px;
    height: 35px;
border-radius:5px;
border:none;

    
    @media (min-width: 800px) {
      display: none;
    }
`
export const ContainerMenu = styled.div`
    width: 100%;
  background-color: var(--white);
  border-radius: 0 0 20px 20px;
  position: absolute;
  left: 0;
  top: 95px;
  transition: margin-top 100s;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media (min-width: 800px) {
      display: none;
    }
`
export const ContainerButton = styled.div`
height: 50px;
    display: flex;
    padding: 0px 15px;
    border-bottom: 1px solid var(--ligthgray);
`
export const ButtonSearch = styled.button`
    
`
export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
`
export const InputSearch = styled.input`
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid var(--ligthgray);
    height: 23px;
    padding-left: 5px;
    font-weight: 200;
`

export const ContainerInput = styled.div`
width: 250px;
  height: 30px;
  border: 2px solid var(--collorGray100);
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 515px) {
    position: absolute;
    top: 52px;
    left: 21%;
    z-index: 1;
  }

`
export const CartDiv = styled.div`
background-color: var(--pink);
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: bold;
`
export const UserDiv = styled.div`
  @media(max-width: 800px){
    display: none;
  }
`