import {Routes, Route} from "react-router-dom";

//Pages
import Fundamentals from "../Pages/fundamentals";
import Home from "../Pages/Home";

export default function Router()
{
    return(<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/fundamentals" element={<Fundamentals/>} />
    </Routes>)
}