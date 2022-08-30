import { useLocation, useNavigate } from "react-router"
import { Azul, Boleto, ButtonBuy, ButtonCad, ButtonConta, ButtonInstitucional, ButtonQT, ButtonRaiz, ButtonsBuy, ButtonSuporte, Cards, CEPButton, CEPDiv, CEPInput, Claro, ConditionDiv, ContainerImage, ContainerImages, ContainerInfo, ContainerMiniaturas, ContainerProduto, Contatos, Cores, Dados, DetalhesDiv, DivDetalhes, DivInfo, DivInfoAge, DivInstitucional, DivInstitucional2, DivPath, DivPgs, DivPowered, DivRedes, Elo, Encrypt, Face2, FaceDiv, Foot, Footer, FreteDiv, Horarios, Images, InfoDiv, InputNews, InputQT, InstaDiv, Instagram, Institucional, MailDiv, Master, Miniatura, MiniaturaImg, NewPrice, Newsletter, Nome, OffDiv, OldPrice, OutrosProds, P, PCodigo, PCompartilhar, PCurtir, PDetalhes, PFrete, PInfos, Pix, PNews, PNome,  PPath, PricesDiv, ProductPicture, QD, QT, QU, RedesDiv, RedesSociais, SelectCores, Span, SpanProduct, Tamanho, TikTok, TN, Twiter, Vermelho, Visa, Youtube } from "./styles"
import {FiShoppingCart, FiFacebook, FiInstagram} from "react-icons/fi"
import {TbMail} from "react-icons/tb"
import Carrosel from "../Carrousel"
import {CgFacebook} from "react-icons/cg"
import {BsTwitter, BsYoutube} from "react-icons/bs"
import {RiInstagramFill} from "react-icons/ri"
import {FaTiktok} from "react-icons/fa"
import {FiPhone} from "react-icons/fi"
import master from "../../assets/master.png"
import visa from "../../assets/visa.png"
import elo from "../../assets/elo.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import encrypt from "../../assets/encrypt.png"
import vtex from "../../assets/vtex.png"
import { useEffect, useState } from "react"

const Product = ()=>{
    const navegate = useNavigate()
    const location = useLocation()
    const [desc, setDesc] = useState(false)
    const [frete, setFrete] = useState(false)
    const [valorFrete, setValorFrete] = useState(0)
    const [quantidade, setQuantidade]= useState(1)
    const [inst, setInst] = useState(false)
    const [conta, setConta]= useState(false)
    const [suporte, setSuporte]=useState(false)
    const [image, setImage] = useState(location.state.product.url)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||0)

    useEffect(()=>{
        setImage(location.state.product.url)
        setCart(JSON.parse(localStorage.getItem("cart")))
        
    }, [location.state.product.url])

    const addRemoveQuantidade=(opp)=>{
        if (opp === "soma"){
            setQuantidade(quantidade + 1)
        }
        if (opp === "sub" && quantidade > 1 ) {
            setQuantidade(quantidade -1)
        }

    }

    const addInCart = ()=>{
        setCart(cart + quantidade)
        localStorage.setItem("cart", JSON.stringify(cart+quantidade))
    }
    
    const openCloseSuporte=()=>{
        setSuporte(!suporte)
    }

    const openCloseConta=()=>{
        setConta(!conta)
    }
    
    const openCloseInst = ()=>{
        
        setInst(!inst)
    }

    const handleClick = (path)=>{
        navegate(path)

      }
    const openCloseDesc = ()=>{
        setDesc(!desc)
    }

    const openCloseFrete = ()=>{
        setFrete(!frete)
    }
    const calculaFrete = ()=>{
        setValorFrete(Math.floor(Math.random() * 20) + 10);
    }
    return(
        <>
            <div>
                <DivPath>
                    <PPath>Home<Span>{" > "}</Span>{(location.pathname).substring(1,6)}<Span>{" > "}</Span><SpanProduct>{location.state.product.nome}</SpanProduct></PPath>
                </DivPath>
                <ContainerProduto>
                    <ContainerImages>
                        <ContainerImage>
                            <ProductPicture alt={location.state.product.nome} src={image}/>
                            <OffDiv><p>20% OFF</p></OffDiv>
                        </ContainerImage>
                        <ContainerMiniaturas>

                        {location.state.product.miniaturas.map(product=>
                            <>
                            <Miniatura key={product}>
                                <MiniaturaImg src={product} onClick={()=> setImage(product)}/>
                            </Miniatura>
                            
                            </>    
                        )}
                        </ContainerMiniaturas>

                    </ContainerImages>
                    <ContainerInfo >
                        <Nome >
                            <PNome>{location.state.product.nome}</PNome>
                            <PCodigo>Código: {location.state.product.codigo}</PCodigo>
                        </Nome>
                        <InfoDiv>
                            <PricesDiv>
                                <OldPrice>R$ {(location.state.product.valor_velho).toFixed(2)}</OldPrice>
                                <NewPrice>R$ {(location.state.product.valor).toFixed(2)}</NewPrice>
                            </PricesDiv>
                            <ConditionDiv>
                                <p>ou {location.state.product.condicao}X de R${(location.state.product.valor / location.state.product.condicao).toFixed(2)}</p>
                            </ConditionDiv>
                        </InfoDiv>
                        <Cores >
                            <p>Cores</p>
                            <SelectCores>
                                <Claro/>
                                <Azul/>
                                <Vermelho/>
                            </SelectCores>
                        </Cores>
                        <Tamanho>
                            <TN>39</TN>
                            <QT>40</QT>
                            <QU>41</QU>
                            <QD>42</QD>
                        </Tamanho>
                        <ButtonsBuy>
                            <ButtonQT onClick={()=>addRemoveQuantidade("sub")}>-</ButtonQT>
                            <InputQT value={(quantidade < 10 ? "0":"")+quantidade}/>
                            <ButtonQT onClick={()=>addRemoveQuantidade("soma")}>+</ButtonQT>
                            <ButtonBuy onClick={()=> addInCart()}><FiShoppingCart/>Comprar</ButtonBuy>
                        </ButtonsBuy>
                        <DetalhesDiv>
                            <p>Detalhes do produto</p><button onClick={()=>openCloseDesc()}>{desc ? <>-</>:<>+</>}</button>
                        </DetalhesDiv>
                            {desc &&(
                                <DivDetalhes><PDetalhes>{location.state.product.descricao}</PDetalhes></DivDetalhes>
                            )}
                        <FreteDiv>
                            <p>Calcular frete e entrega</p><button onClick={()=>openCloseFrete()}>{frete ? <>-</>:<>+</>}</button>
                        </FreteDiv>
                            {frete &&(
                                <>
                                    <CEPDiv><PDetalhes>CEP</PDetalhes><CEPInput type="number" placeholder="Digite o CEP" maxLength={8}/><CEPButton onClick={()=> calculaFrete()}>Calcular</CEPButton></CEPDiv>
                                    <PFrete>R$ {(valorFrete).toFixed(2)}</PFrete>
                                </>
                            )}
                        <RedesDiv>
                            <PCompartilhar>Compartilhar</PCompartilhar>
                            <DivRedes>
                                <FaceDiv><FiFacebook/></FaceDiv>
                                <InstaDiv><FiInstagram/></InstaDiv>
                                <MailDiv><TbMail/></MailDiv>
                            </DivRedes>
                        </RedesDiv>
                    </ContainerInfo>

                </ContainerProduto>
                        <OutrosProds>
                            <PCurtir>Você também vai curtir</PCurtir>
                            <Carrosel path={(location.pathname).split("/",2)[1]}></Carrosel>
                        </OutrosProds>
                        <Newsletter>
                            <PNews>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</PNews>
                            <InputNews placeholder="Nome"></InputNews>
                            <InputNews placeholder="Email"></InputNews>
                            <ButtonCad>Cadastrar</ButtonCad>
                        </Newsletter>
                        <DivInfo>
                            <DivInfoAge>
                                <ButtonRaiz onClick={()=>handleClick("/")}/>
                                <RedesSociais>
                                    <Face2><CgFacebook/></Face2>
                                    <Twiter><BsTwitter/></Twiter>
                                    <Instagram><RiInstagramFill/></Instagram>
                                    <Youtube><BsYoutube/></Youtube>
                                    <TikTok><FaTiktok/></TikTok>
                                </RedesSociais>
                                <div>
                                    <Contatos>
                                        <FiPhone/><p>11 99999-9999</p>
                                    </Contatos>
                                    <Contatos>
                                        <TbMail/><p>contato@agencian1.com.br</p>
                                    </Contatos>
                                </div>
                                <div>
                                    <Horarios>
                                        <p>Seg. à Sex. das 09:00h às 18:00h</p>
                                    </Horarios>
                                    <Horarios>
                                        <p>Sábado das 10:00h às 14:00h</p>
                                    </Horarios>
                                </div>
                            </DivInfoAge>
                            <Footer>

                                <Dados>
                                    <Institucional>
                                        <p>Institutional</p><ButtonInstitucional onClick={()=> openCloseInst()}>{inst ? <>-</>:<>+</>}</ButtonInstitucional>
                                        <DivInstitucional2>
                                            <p>Quem Somos</p>
                                            <p>Nossas Lojas</p>
                                            <p>Fale Conosco</p>
                                        </DivInstitucional2>
                                    </Institucional>
                                        {inst && (
                                            <DivInstitucional>
                                            <p>Quem Somos</p>
                                            <p>Nossas Lojas</p>
                                            <p>Fale Conosco</p>
                                        </DivInstitucional>
                                        )}
                                    <Institucional>
                                        <p>Minha Conta</p><ButtonConta onClick={()=> openCloseConta()}>{conta ? <>-</>:<>+</>}</ButtonConta>
                                        <DivInstitucional2>
                                            <p>Meus Dados</p>
                                            <p>Meus Pedidos</p>
                                            <p>Login</p>
                                        </DivInstitucional2>
                                    </Institucional>
                                        {conta && (
                                            <DivInstitucional>
                                            <p>Meus Dados</p>
                                            <p>Meus Pedidos</p>
                                            <p>Login</p>
                                        </DivInstitucional>
                                        )}
                                    <Institucional>
                                        <p>Suporte</p><ButtonSuporte onClick={()=> openCloseSuporte()}>{suporte ? <>-</>:<>+</>}</ButtonSuporte>
                                        <DivInstitucional2>
                                            <p>Politica de privacidade</p>
                                            <p>Perguntas Frequentes</p>
                                            <p>Troca ou devolução</p>
                                        </DivInstitucional2>
                                    </Institucional>
                                        {suporte && (
                                            <DivInstitucional>
                                            <p>Politica de privacidade</p>
                                            <p>Perguntas Frequentes</p>
                                            <p>Troca ou devolução</p>
                                        </DivInstitucional>
                                        )}
                                </Dados>
                                <Foot>
                                    <DivPgs>
                                        <PInfos>Pagamentos</PInfos>
                                        <Cards>
                                            <Master><Images alt="master" src={master}/></Master>
                                            <Visa><Images alt="master" src={visa}/></Visa>
                                            <Elo><Images alt="master" src={elo}/></Elo>
                                            <Pix><Images alt="master" src={pix}/></Pix>
                                            <Boleto><Images alt="master" src={boleto}/></Boleto>
                                        </Cards>
                                    </DivPgs>
                                    <div>
                                        <PInfos>Segurança</PInfos>
                                        <Encrypt>
                                            <Images alt="encrypt" src={encrypt}/>
                                        </Encrypt>
                                    </div>

                                    <DivPowered>
                                        <P>Created by</P>
                                        <ButtonRaiz onClick={()=>handleClick("/")}/>
                                        <P>Powered by</P>
                                        <img alt="vtex" src={vtex}/>
                                    </DivPowered>
                                </Foot>
                            </Footer>
                        </DivInfo>
                
            </div>
        </>
    )
}

export default Product