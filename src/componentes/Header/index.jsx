import { CardDiv, ChangeDiv, Container, TruckDiv } from "./styles"
import {TbRefresh} from "react-icons/tb"
import {FiTruck} from "react-icons/fi"
import {BsCreditCard} from "react-icons/bs"


const Header =()=>{
    return (
        <>
            <Container>
                <ChangeDiv>
                    <TbRefresh/><p>PRIMEIRA TROCA GRÁTIS</p>
                </ChangeDiv>
                <TruckDiv>
                    <FiTruck/><p>FRETE GRÁTIS NAS COMPRAS ACIMA DE R$500</p>
                </TruckDiv>
                <CardDiv>
                    <BsCreditCard/><p>PARCELE EM ATÉ 6X SEM JUROS</p>
                </CardDiv>
            </Container>
        </>
    )
}

export default Header