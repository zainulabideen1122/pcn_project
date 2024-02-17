import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate  } from "react-router-dom";
import './index.css'
import { FaRegUserCircle } from "react-icons/fa";
import store from '../../store';
import { useEffect } from 'react';

function UpperNav()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const loginUser = store.getState().loginUser.user;
    const loginUser = useSelector(state=>state.loginUser.user)
    const loginButton= ()=>{
        return(
            <NavLink to="/auth/login">
                    <button className='loginButton'>Login</button>
            </NavLink>
        )
    }

    function logoutUser()
    {
        dispatch({
            type:'login/loginFalse'
        })
        navigate('/');
       }



    return(
        <>
            <ul className='upperNav-ul'>
                <li className='mainLogo'>PCN</li>
                <li className='userDetail'>
                    <p>{ loginUser.name || loginButton()}</p>
                    <FaRegUserCircle size={30}/>
                    {loginUser.name && <button onClick={logoutUser} style={{marginLeft:'1rem'}} className='loginButton'>Logout</button>}
                </li>
                
            </ul>
        </>
    )
}

export default UpperNav;