import { Route, BrowserRouter, Routes} from "react-router-dom"
import Home from "../componentes/Home"

const AllRoutes =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes