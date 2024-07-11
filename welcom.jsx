
import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const Navbar = () => {
  return (
    
    <div className="container">
        <body>
        
        <div className="container1">
        
          <p>Welcome to food donate app</p>
          <h2 style={{ color: 'rgb(233, 92, 92)' }}>Login As</h2>

          <div className="container2">
            <Link to="/admin">
              <button>admin</button>
            </Link>
            <Link to="/user">
              <button>user</button>
            </Link>
            <Link to="/donor">
              <button>donor</button>
            </Link>
            </div>
          </div>
          </body>
        </div>
    
  );
};

export default Navbar;
