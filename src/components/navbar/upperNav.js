import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import './index.css'
import { FaRegUserCircle } from "react-icons/fa";
import store from '../../store';

function UpperNav()
{
    const loginUser = store.getState().loginUser.user;
    const loginButton= ()=>{
        return(
            <NavLink to="/auth/login">
                    <button className='loginButton'>Login</button>
            </NavLink>
        )
    }

    return(
        <>
            <ul className='upperNav-ul'>
                <li className='mainLogo'>PCN</li>
                <li className='userDetail'>
                    <p>{ loginUser.name || loginButton()}</p>
                    <FaRegUserCircle size={30}/>
                </li>
            </ul>
        </>
    )
}

export default UpperNav;