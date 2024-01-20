import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { GoContainer } from "react-icons/go";



function SideNav(){

    const location = useLocation();

    return(<>
        <section className="sideNavbar">
            <ul>
                <li>
                    <NavLink to="/" >
                        <p className={location.pathname==='/'?'activeLink' : ''}><IoMdHome style={{paddingRight:"0.6rem"}}/>Home</p>
                        {/* <MdKeyboardArrowRight style={{marginLeft:"auto"}} size={27}/> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/courses">
                        <p className={location.pathname==='/courses'?'activeLink' : ''}><GoContainer style={{paddingRight:"0.6rem"}} />Course</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/option2">
                        <p>Option2</p>
                        
                    </NavLink>
                </li>
            </ul>
        </section>
    </>)
}

export default SideNav;