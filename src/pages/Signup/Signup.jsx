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
                    <input type='fname' id='fname' placeholder='First name' name='fname' value={formData.fname} onClick={handleChange}/>
                    <input type='lname' id='lname' placeholder='Last name' name='lname' value={formData.lname} onClick={handleChange}/>
                    <input type='email' id='email' placeholder='Email' name='email' value={formData.email} onClick={handleChange}/>
                    <input type='password' id='pasword' placeholder='Password' name='password' value={formData.password} onClick={handleChange}/>
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