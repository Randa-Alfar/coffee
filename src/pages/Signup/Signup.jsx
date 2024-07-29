import './Signup.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signup = () => {
    const [formData, setFormData ] = useState({fname:"",lname:"",email:"",password:""});

    const handleChange = (event)=>{
        const { name , value } = event.target;
        setFormData((preFormData) => ({ ...preFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`email: ${formData.email}, password: ${formData.password}`);
    }
    return(
        <>
            <div className='signup-container'>
                <form onSubmit={handleSubmit}>
                    <span>Sign Up</span>
                    <input type='text' id='fname' placeholder='First name' name='fname' value={formData.fname} onChange={handleChange}/>
                    <input type='text' id='lname' placeholder='Last name' name='lname' value={formData.lname} onChange={handleChange}/>
                    <input type='email' id='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
                    <input type='password' id='pasword' placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
                    <div>
                        <span>Already have an account? <Link to='login'>Log In!</Link></span>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </>
    );
}
export default Signup