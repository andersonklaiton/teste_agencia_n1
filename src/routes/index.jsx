import { Route, BrowserRouter, Routes} from "react-router-dom"
import Calcas from "../componentes/Calcas"
import Home from "../componentes/Home"
import Inverno from "../componentes/Inverno"
import Lancamentos from "../componentes/Lancamentos"
import Off from "../componentes/Off"
import Tenis from "../componentes/Tenis"
import TenisProduct from "../componentes/TenisProduct"
import Tshirts from "../componentes/Tshirts"

const AllRoutes =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tenis" element={<Tenis/>}/>
                <Route path="/tenis/:nome" element={<TenisProduct />}/>
                <Route path="/lancamentos" element={<Lancamentos/>}/>
                <Route path="/tshirts" element={<Tshirts/>}/>
                <Route path="/calcas" element={<Calcas/>}/>
                <Route path="/inverno" element={<Inverno/>}/>
                <Route path="/off" element={<Off/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes