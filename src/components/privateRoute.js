
import { Outlet, Navigate } from "react-router-dom";
import store from "../store";
import { useSelector } from "react-redux";


export default function PrivateRoute()
{
    const loginState = useSelector(state=>state.loginUser);
    
    return loginState.isLogin ? <Outlet /> : <Navigate to='/auth/login' />
}