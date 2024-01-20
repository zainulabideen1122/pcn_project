import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import { useState } from 'react';
function Login (){

    const [credentials, setCredentials] = useState({email :'', password:''})
    const navigate = useNavigate();

    const handleLogin = ()=>{
        // if(!credentials.email || !credentials.password)
        // {
        //     alert("Please fill up all fields!")
        // }
        //else
        {
            console.log(credentials);
            navigate("/");
        }
    }

    const handleRegister = ()=>{
        navigate("/auth/register");
    }

    return(
        <>
            <section className="loginPage">
                <div className="loginDiv">
                    <h1>Login</h1>
                    <p>Please enter your login and password</p><br></br>
                    <input type='text' value={credentials.email} placeholder='Email' onChange={(e)=>setCredentials({...credentials, email:e.target.value}) }/>
                    <input type='password' required value={credentials.password} placeholder='Password' onChange={(e)=>setCredentials({...credentials, password:e.target.value}) }/>
                    <p style={{padding:"0.7rem 0"}}>Forgot password?</p>
                    <div className='loginButtons'>
                        <button style={{borderColor:"#27ae60"}} className='loginButton' onClick={handleLogin}>Login</button>
                        <button className='RegisterButton' onClick={handleRegister}>Register</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;