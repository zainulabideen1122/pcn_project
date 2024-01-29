import { useSelector } from 'react-redux';
import './index.css'
import { FaRegUserCircle } from "react-icons/fa";
import store from '../../store';

function UpperNav()
{
    const loginUser = store.getState().loginUser.user;

    return(
        <>
            <ul className='upperNav-ul'>
                <li className='mainLogo'>Logo</li>
                <li className='userDetail'>
                    <p>{ loginUser.name || 'Username'}</p>
                    <FaRegUserCircle size={30}/>
                </li>
            </ul>
        </>
    )
}

export default UpperNav;