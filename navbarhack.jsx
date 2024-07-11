import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar' style={{ background: 'linear-gradient(rgb(111, 180, 177), rgb(233, 92, 92))', color: '#fff' }}>
            <h1 style={{paddingLeft:20,color:'black',fontSize: "3.5rem"}}> Food <b style={{ color: "#806abc" }}>Bridge</b></h1>
            <div className='nav' style={{ backgroundColor: '#fff' ,margin:10,padding:20}}>
                <Link to='/' style={{ margin:10, color: 'black', textDecoration: 'none', fontSize: '20px' }}>
                    Home
                </Link>
                <Link to='/about' style={{ padding: 10, color: 'black', textDecoration: 'none', fontSize: '20px' }}>
                    About
                </Link>
                <Link to='/contact' style={{ padding: 10, color: 'black', textDecoration: 'none', fontSize: '20px' }}>
                    Contact
                </Link>
                <Link to='/profile' style={{ padding: 10, color: 'black', textDecoration: 'none', fontSize: '20px' }}>
                    Profile
                </Link>
              
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;
