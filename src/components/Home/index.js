import { NavLink } from "react-router-dom";
import Teacher from "../Course";
import Navigation from "../navbar/Navigation";
import './index.css'
import store from "../../store";

const Home = ()=>{
    return(<>
        <Navigation/>
        {console.log(store.getState())}
        <section className="leaveSideNav homePage">
            {!store.getState().loginUser.isLogin && <h1 className="loginAlert">You need to <NavLink to="/auth/login">login</NavLink> first!</h1>}
        </section>
    </>)
}

export default Home;