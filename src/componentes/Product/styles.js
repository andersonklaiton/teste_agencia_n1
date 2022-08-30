import agencia_logo from "../../assets/agencia_logo.png"

import styled from "styled-components";

export const ContainerImage = styled.div`
    width: 380px;
    height: 380px;
    margin-top: 5px;
    display: flex;
    margin: 15px auto;
    @media(min-width:800px){
        width: 550px;
        height: 550px;
    }

`
export const ProductPicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;

`

export const ContainerMiniaturas = styled.div`
    width: 380px;
    height: 80px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    @media(min-width:580px){
        flex-direction:column;
        width: 0;
        height: 550px;
        margin-top:15px;
    }

`
export const DivPath = styled.div`
    width: 380px;
    margin: 0 auto;
`
export const Span = styled.span`
    color:var(--pink);
`
export const PPath = styled.p`
    color:var(--gray);
`
export const SpanProduct = styled.span`
    color:var(--purple  );
`

export const Miniatura = styled.div`
    width:80px ;
    @media(min-width:800px){
        width: 120px;
    }

`
export const MiniaturaImg = styled.img`
    width: 100%;
    border-radius: 10px;
    border: 2px solid var(--ligthgray);
`

export const ContainerImages = styled.div`
    @media(min-width:580px){
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        width: 845px;
    }
`
export const ContainerProduto = styled.div`
    width: 380px;
    margin: 0 auto ;
    @media(min-width:800px){
        display:flex ;
        width: 90%;
        align-items: center;
    }
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
    margin: 10px;
    font-weight: bold;
`

export const ContainerInfo = styled.div`
    @media(min-width:800px){
        width: 50%;
    }
`
export const Nome = styled.div`

`
export const PNome= styled.p`
    color: var(--blackblue);
    font-weight: bold;
`
export const PCodigo = styled.p`
    color: var(--mediungray);
    font-weight: 200;
    font-size: 14px;
    margin-top: 8px;
`

export const PricesDiv = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
    margin-top: 25px;
`
export const OldPrice = styled.p`
    color: var(--mediungray);
    text-decoration: line-through;
    font-size: 14px;
`
export const NewPrice = styled.p`
    color: var(--pink);
    font-weight: bold;
`
export const InfoDiv = styled.div`

`

export const ConditionDiv = styled.div`
    display: flex;
    color: var(--blackblue);
`
export const Cores = styled.div`
    margin-top: 15px;
    font-size: 15px;
    color: var(--gray);
`
export const SelectCores = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
export const Claro = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--lowblue);
    border-radius: 50%;
`
export const Azul = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--blue);
    border-radius: 50%;
`
export const Vermelho = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--red);
    border-radius: 50%;
`

export const Tamanho = styled.div`
    width: 220px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

`
export const TN = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--ligthgray);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    font-weight: bold;
`
export const QT = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--ligthgray);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    background-color: var(--ligthgray);
    font-weight: bold;
`
export const QU = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--ligthgray);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    font-weight: bold;
`
export const QD = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    border: 5px solid var(--barblue);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--barblue);
    font-weight: bold;
`
export const ButtonQT = styled.button`
    width: 30px;
    height: 30px;
    background-color: var(--light-blue);
    border-radius: 50%;
`

export const ButtonsBuy = styled.div`
    margin-top:15px;
`
export const InputQT = styled.input`
    width: 45px;
    height: 45px;
    margin: 0 10px;
    border-radius: 5px;
    border: 1px solid var(--ligthgray);
    color: var(--blackblue);
    text-align:center;
    font-size:20px;
`

export const ButtonBuy = styled.button`
    background-color: var(--light-blue);
    width: 160px;
    height: 45px;
    border-radius: 25px;
    margin-left: 20px;
    color: var(--blackblue);
    font-size: 21px;
    @media(min-width:800px){
        width: 300px;
    }
`
export const DetalhesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--ligthgray);
    margin-top: 20px;
    height: 40px;
    color: var(--blackblue);
    font-size: 20px;
    @media(min-width:800px){
        
    }
`

export const FreteDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--ligthgray);
    margin-top: 20px;
    height: 40px;
    color: var(--blackblue);
    font-size: 20px;
    @media(min-width:800px){
        
    }
`

export const PCompartilhar = styled.p`
    font-size: 12px;
    color: var(--gray);
`

export const RedesDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`
export const DivRedes = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 185px;
`
export const FaceDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const InstaDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const MailDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`

export const OutrosProds = styled.div`
    width: 90%;
    margin: 20px auto;
    
`
export const PCurtir = styled.p`
    color: var(--purple);
    font-weight: bold;
    font-size: 20px;
`
export const ProductName = styled.p`
    color: var(--blackblue);
    font-weight: 500;
    margin-top: 10px;
`

export const Newsletter = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 300px;
    background-color: var(--barblue);
    color: var(--white);
    padding: 8%;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width:800px){
        flex-direction: row;
        padding:4%
    }

`
export const InputNews = styled.input`
    border: none;
    margin-top: 20px;
    height: 30px;
    width:100% ;
    border-radius: 10px;
    padding-left: 10px;
    color: var(--ligthgray);
    @media(min-width:800px){
        width: 60%;
        margin-left: 10px;
    }
`
export const ButtonCad = styled.button`
    background-color: var(--light-blue);
    width: 150px;
    height: 35px;
    margin-top: 20px;
    border-radius: 20px;
    color: var(--blackblue);
    font-size: 18px;
    @media(min-width:800px){
        margin-left: 20px;
    }
`

export const PNews = styled.p`
    @media(min-width:800px){
        width: 60%;

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
export const DivInfo = styled.div`
    width: 90%;
    margin: 0 auto;
    @media(min-width:800px){
        display: flex;
        justify-content: space-between;
    }
`
export const DivInfoAge = styled.div`
    margin-top: 20px;
    background-color: var(--lowgray);
    border-radius: 10px;
    padding: 60px 35px;
    width: 370px;
`
export const RedesSociais = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
    border-bottom: 1px solid var(--ligthgray);
    padding-bottom: 20px;
`
export const Face2 = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const Twiter = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const Instagram = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const Youtube = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`
export const TikTok = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--gray);
    border-radius: 100%;
    display: flex;
    color: var(--white);
    font-size: 24px;
    justify-content: center;
    align-items: center;
`

export const Contatos = styled.div`
    display: flex;
    color: var(--pink);
    margin-top: 10px;
`

export const Horarios = styled.div`
    color: var(--blackblue);
    font-size: 13px;
    margin-top: 10px;
`

export const Institucional = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--ligthgray);
    margin-top: 20px;
    height: 40px;
    color: var(--blackblue);
    font-size: 20px;
    @media(min-width:800px){
        width: 30%;
        border-bottom: none;
        display: flex;
        flex-direction: column;
        height: 167px;
        margin-bottom: 15px;
    }
`

export const PInfos = styled.p`
    color: var(--blackblue);
    margin-top: 20px;
`
export const Master = styled.div`
    width: 40px;
    height: 30px;
    border: 1px solid var(--ligthgray);
    border-radius: 5px;
`
export const Images = styled.img`
    width: 100%;
    height: 100%;
`
export const Visa = styled.div`
    width: 40px;
    height: 30px;
    border: 1px solid var(--ligthgray);
    border-radius: 5px;
`
export const Elo = styled.div`
    width: 40px;
    height: 30px;
    border: 1px solid var(--ligthgray);
    border-radius: 5px;
`
export const Pix = styled.div`
    width: 40px;
    height: 30px;
    border: 1px solid var(--ligthgray);
    border-radius: 5px;
`
export const Boleto = styled.div`
    width: 40px;
    height: 30px;
    border: 1px solid var(--ligthgray);
    border-radius: 5px;
`
export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 240px;
    margin-top: 10px;
`

export const Encrypt = styled.div`
    width: 226px;
    height: 60px;
    margin-top:15px;
`
export const P = styled.p`
    font-size: 15px;
    color: var(--gray);
`

export const DivPowered= styled.div`
    display: flex;
    margin: 15px auto;
    justify-content: space-between;
    align-items: center;
    width:380px ;
`

export const Footer = styled.div`
    @media(min-width:800px){
        display: flex;
        flex-direction: column;
        width: 70%;
    }
`
export const Dados = styled.div`
    @media(min-width:800px){
        display: flex;
        justify-content: space-between;
    }
`
export const PDetalhes = styled.p`
    text-align: justify;
    color: var(--gray);
`
export const DivDetalhes = styled.div`
    @media(min-width:800px){
       
    }
`
export const CEPDiv = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    @media(min-width:800px){
        width: 60%;
    }
`

export const CEPInput = styled.input`
    border-radius: 10px;
    border: 1px solid var(--gray);
    padding-left: 10px;
    height: 35px;
`
export const CEPButton = styled.button`
    background-color: var(--light-blue);
    width: 85px;
    height: 30px;
    border-radius: 20px;
    color: var(--blackblue);
`
export const PFrete = styled.p`
    margin-top: 10px;
    color: var(--gray);
`

export const ButtonInstitucional = styled.button`
    @media(min-width:800px){
        display: none ;
    }
`

export const ButtonConta = styled.button`
    @media(min-width:800px){
        display: none ;
    }
`

export const ButtonSuporte = styled.button`
    @media(min-width:800px){
        display: none ;
    }
`
export const DivInstitucional = styled.div`
    color: var(--gray);
    margin-top: 15px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 300;
`

export const DivInstitucional2 = styled.div`
    width: 100%;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    height: 120px;
    color: var(--gray);
    font-weight: 300;
    line-height: 28px;
    font-size: 18px;
    @media(max-width:800px){
        display: none ;
    }
`

export const Foot = styled.div`
    @media(min-width:800px){
        display: flex;
        align-items: baseline;
        justify-content: space-evenly;
    }
`

export const DivPgs = styled.div`
    @media(min-width:800px){
        margin-right:45px;
    }
`