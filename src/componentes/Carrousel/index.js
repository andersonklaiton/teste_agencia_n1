import Carousel from "react-elastic-carousel";
import porducts from "../../assets/products2.json"
import { useNavigate } from "react-router";
import { ProductsDiv, ProductInfo, ProductPicture, ContainerImage, OffDiv,  InfoDiv, ConditionDiv, PricesDiv, NewPrice,  OldPrice, ProductName} from "./styles";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Carrosel=(path)=> {
    const navigate = useNavigate()
    

    const handleClick=(product)=>{
        
        navigate(`/tenis/${product.nome}`,{state:{product}}  )
    }
  return (
    <Carousel breakPoints={breakPoints}>
          {porducts[`${path.path}`].map((product) => (
            <ProductsDiv>
                  <ProductInfo key={product.codigo} onClick={()=>handleClick(product)}>
                    <ProductPicture >
                        <ContainerImage alt={product.nome} src={product.url}/>
                        <OffDiv><p>20% OFF</p></OffDiv>
                    </ProductPicture>
                    <InfoDiv>
                        <ProductName>{product.nome}</ProductName>
                        <PricesDiv>
                            <OldPrice>R$ {(product.valor_velho).toFixed(2)}</OldPrice>
                            <NewPrice>R$ {(product.valor).toFixed(2)}</NewPrice>
                        </PricesDiv>
                        <ConditionDiv>
                            <p>ou {product.condicao}X de R${(product.valor / product.condicao).toFixed(2)}</p>
                        </ConditionDiv>
                    </InfoDiv>
                    </ProductInfo>
                

            </ProductsDiv>
          ))}
        </Carousel>
  );
}

export default Carrosel