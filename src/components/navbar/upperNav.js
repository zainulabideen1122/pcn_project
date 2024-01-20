import './index.css'
import { FaRegUserCircle } from "react-icons/fa";

function UpperNav()
{
    return(
        <>
            <ul className='upperNav-ul'>
                <li className='mainLogo'>Logo</li>
                <li className='userDetail'>
                    <p>Username</p>
                    <FaRegUserCircle size={30}/>
                </li>
            </ul>
        </>
    )
}

export default UpperNav;