import './Login.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Login = () =>{
    const [formData, setFormData] = useState({email:"",password:""});

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`email: ${formData.email}, password: ${formData.password}`);
    }
    return(
        <>
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <span>Log In</span>
                    <input type="email" id="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                    <input type='password' id="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
                    <div>
                        <span>Don't have an account? <Link to='signup' >Sign Up!</Link></span>
                        <span><Link to='forgetPassword'>Foget your password?</Link></span>
                    </div>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </>
    );
}
export default Login