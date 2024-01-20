import { NavLink } from "react-router-dom";
import Teacher from "../Course";
import Navigation from "../navbar/Navigation";
import './index.css'

const Home = ()=>{
    return(<>
        <Navigation/>
        <section className="leaveSideNav homePage">
            <h1 className="loginAlert">You need to <NavLink to="/auth/login">login</NavLink> first!</h1>
        </section>
    </>)
}

export default Home;