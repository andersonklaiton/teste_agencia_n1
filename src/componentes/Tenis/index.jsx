import Header from "../Header"
import Menu from "../Menu"
import Products from "../Products"
import products from "../../assets/products2.json"

const Tenis = ()=>{
    
    return (
        <>
            <Header/>
            <Menu/>
            <Products product={products.tenis} path={"tenis"}/>
        </>
    )
}

export default Tenis