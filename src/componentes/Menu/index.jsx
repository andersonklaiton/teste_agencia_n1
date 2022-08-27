import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { ButtonMenu, ButtonPath, ButtonRaiz, ButtonSearch, CartDiv, ContainerButton, ContainerButtons, ContainerIcons, ContainerInput, ContainerMenu, InputSearch, MenuDiv, MenuList, UserDiv } from "./styles"
import {IoIosMenu}from "react-icons/io"
import {FiSearch, FiShoppingCart,FiUser} from "react-icons/fi"

const Menu =()=>{
  
  const navegate = useNavigate()
  const [hidden, setHidden]= useState(true)
  const [totalCart, setTotalCart]=useState(0)
  const [showInput, setShowInput]= useState(true)
  

  const handleClick = (path)=>{
    navegate(path)
   setHidden(true)
  }

  const showMenu=()=>{
    setHidden(!hidden)
    
  }

  const showInputSearch = ()=>{
    setShowInput(!showInput)
  }
  

  return (
    <>
      <MenuDiv>
        <ButtonMenu onClick={showMenu}><IoIosMenu/></ButtonMenu>
        <ButtonRaiz onClick={()=>handleClick("/")}/>
        <MenuList>
          <ContainerButtons>
            <ButtonPath onClick={()=>handleClick("/lancamentos")}>Lançamentos</ButtonPath>
            <ButtonPath onClick={()=>handleClick("/tenis")}>Tênis</ButtonPath>
            <ButtonPath onClick={()=>handleClick("/tshirts")}>T-Shirts</ButtonPath>
            <ButtonPath onClick={()=>handleClick("/calcas")}>Calças</ButtonPath>
            <ButtonPath onClick={()=>handleClick("/inverno")}>Inverno</ButtonPath>
            <ButtonPath onClick={()=>handleClick("/off")}>Off</ButtonPath>
          </ContainerButtons>
        </MenuList>
        <ContainerIcons>
          {showInput &&(
            <ContainerInput>
              <InputSearch placeholder="O que você procura?"></InputSearch>
              <ButtonSearch><FiSearch onClick={()=>setShowInput(!showInput)}/></ButtonSearch>
            </ContainerInput>
          )}
          {!showInput &&<FiSearch onClick={()=> setShowInput(!showInput)}/>}
          <UserDiv><FiUser/></UserDiv>
          <button><FiShoppingCart/></button>
          <CartDiv><p>{totalCart}</p></CartDiv>

        </ContainerIcons>
      </MenuDiv>
      {hidden ?
      <></> :
      <ContainerMenu>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/lancamentos")}>Lançamentos</ButtonPath>
        </ContainerButton>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/tenis")}>Tênis</ButtonPath>
        </ContainerButton>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/tshirts")}>T-Shirts</ButtonPath>
        </ContainerButton>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/calcas")}>Calças</ButtonPath>
        </ContainerButton>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/inverno")}>Inverno</ButtonPath>
        </ContainerButton>
        <ContainerButton>
          <ButtonPath onClick={()=>handleClick("/off")}>Off</ButtonPath>
        </ContainerButton>
      </ContainerMenu>
      }
    </>
  )
}
export default Menu