import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Home from '../pages/LandingPage/Home'
import Login from "../components/Login";

function PrivateRoutes({children}:{children:JSX.Element}) {
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector((state:any)=>state.auth)
    return(
        isLoggedIn ? children : <Home/>
    )
}

export default PrivateRoutes