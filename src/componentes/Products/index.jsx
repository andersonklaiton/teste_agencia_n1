import { ConditionDiv, ContainerImage, InfoDiv, NewPrice, OffDiv, OldPrice, PricesDiv, ProductInfo, ProductName, ProductPicture, ProductsDiv } from "./styles"
import { useNavigate } from "react-router-dom"


const Products = (products, path)=>{

    const navigate = useNavigate()


    const handleClick=(product)=>{
        
        navigate(`/${products.path}/${product.nome}`,{state:{product}}  )
    }
    return (
        <>
            <ProductsDiv>
                {products.product.map(product=>
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
                )}

            </ProductsDiv>
        
        </>
    )
}

export default Products
