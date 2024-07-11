import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './foodorder.css'
const FoodOrder = () => {
    const navigate=useNavigate();
    const handleGetOrder = () => {
      navigate('/getorder')
    };

    return (
        <div className="containerfood">
            
            <h1>Food Order</h1>

           <p>Select Place:</p>
            <select id="places" name="places" className='foodselect' style={{width:500}}>
                <option value="place1">Place 1</option>
                <option value="place2">Place 2</option>
                <option value="place3">Place 3</option>
               
            </select>
            <br />
            <h2 className='food'>Food Details</h2>
            <div className="food-details" style={{color:"black"}}>
                
                <div className="food-item">
                    <strong>Food Item:</strong> Burger<br /><br />
                    <strong>Quantity:</strong> 2<br /><br />
                    <strong>Donor Name:</strong> John Doe<br /><br />
                    <strong>Phone Number:</strong> 123-456-7890<br /><br /><br />
                    <button onClick={handleGetOrder}>Get Order</button>
                </div>
                <div className="food-item">
                    <strong>Food Item:</strong> Burger<br /><br />
                    <strong>Quantity:</strong> 2<br /><br />
                    <strong>Donor Name:</strong> John Doe<br /><br />
                    <strong>Phone Number:</strong> 123-456-7890<br /><br /><br />
                    <button onClick={handleGetOrder}>Get Order</button>
                </div>
                <div className="food-item">
                    <strong>Food Item:</strong> Burger<br /><br />
                    <strong>Quantity:</strong> 2<br /><br />
                    <strong>Donor Name:</strong> John Doe<br /><br />
                    <strong>Phone Number:</strong> 123-456-7890<br /><br /><br />
                    <button onClick={handleGetOrder}>Get Order</button>
                </div>
                <div className="food-item">
                    <strong>Food Item:</strong> Burger<br /><br />
                    <strong>Quantity:</strong> 2<br /><br />
                    <strong>Donor Name:</strong> John Doe<br /><br />
                    <strong>Phone Number:</strong> 123-456-7890<br /><br /><br />
                    <button onClick={handleGetOrder}>Get Order</button>
                </div>
                <div className="food-item">
                    <strong>Food Item:</strong> Burger<br /><br />
                    <strong>Quantity:</strong> 2<br /><br />
                    <strong>Donor Name:</strong> John Doe<br /><br />
                    <strong>Phone Number:</strong> 123-456-7890<br /><br /><br />
                    <button onClick={handleGetOrder}>Get Order</button>
                </div>
            </div>
        </div>
    );
};
export default FoodOrder;