import {  useNavigate } from 'react-router-dom';
import './index.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
function Register (){

    const dispatch = useDispatch();
    const [user, setUser] = useState({fName:'', lName:'', email:'', password:''})

    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate("/auth/login");
    }

    const handleRegister = ()=>{
        // console.log(user);
        // navigate("/");

        const newUser = {
            name : user.fName + " " + user.lName,
            email : user.email,
            password : user.password
        }
        dispatch({
            type:'user/addUser',
            payload : newUser
        })

        dispatch({
            type : 'login/loginTrue',
            payload : {isLogin : true, user : newUser}
        })
        navigate("/");

        console.log(store.getState().users)
    }

    return(
        <>
            <section className="loginPage">
                <div className="loginDiv">
                    <h1>Register</h1>
                    <p>Please enter your login and password</p><br></br>
                    <div className='nameInput'>
                        <input type='text' value={user.fName} placeholder='First Name' onChange={(e)=>setUser({...user, fName:e.target.value}) }/>
                        <input className='lastName' value={user.lName} type='text' placeholder='Last Name' onChange={(e)=>setUser({...user, lName:e.target.value}) } />
                    </div>
                    <input type='text' value={user.email} placeholder='Email' onChange={(e)=>setUser({...user, email:e.target.value}) } />
                    <input type='password' placeholder='Password' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                    
                    <div className='loginButtons' style={{marginTop:"1rem"}}>
                        <button className='loginButton' onClick={handleLogin}>Login</button>
                        <button style={{borderColor:"#27ae60"}} className='RegisterButton' onClick={handleRegister}>Register</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;