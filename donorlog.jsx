import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './login.css'
const Donor = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username !== "" && password !== "") {
            alert("Login successful!");
            navigate('/donorpage');
        } else {
            alert("Invalid username or password. Redirecting to register page.");
            navigate('/donor')
        }
    };

    return (
        <div className='admin'>
            
            <form onSubmit={handleSubmit} >
                <h2 >Donor Login</h2>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password"  required />
                <input type="submit" value="Login" />
                <p style={{color:"black"}}>You'r not registered?<Link to="/donor">Register</Link></p>
            </form>
        
        </div>
    );
};


export default Donor;
