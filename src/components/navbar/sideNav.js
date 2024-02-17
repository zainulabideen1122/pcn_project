import { NavLink, useLocation } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GoContainer } from "react-icons/go";
import CheckPermission from "../checkPermission";



function SideNav(){

    const location = useLocation();

    return(<>
        <section className="sideNavbar">
            <ul>
                <li className={location.pathname==='/'?'activeLink' : ''}>
                    <NavLink to="/" >
                        <p ><IoMdHome style={{paddingRight:"0.6rem"}}/>Home</p>
                        {/* <MdKeyboardArrowRight style={{marginLeft:"auto"}} size={27}/> */}
                    </NavLink>
                </li>
                <li className={location.pathname==='/courses'?'activeLink' : ''}>
                    <NavLink to="/courses">
                        <p ><GoContainer style={{paddingRight:"0.6rem"}} />Course</p>
                    </NavLink>
                </li>
                <CheckPermission>
                <li className={location.pathname==='/faculty'?'activeLink' : ''}>
                    <NavLink to="/faculty">
                        <p><FaUserFriends style={{paddingRight:"0.6rem"}} />Faculty</p>
                    </NavLink>
                </li>
                </CheckPermission>
            </ul>
        </section>
    </>)
}

export default SideNav;