import React, { useState } from 'react';
import './fooddonate.css';
import { useNavigate } from 'react-router-dom';

const FoodDetails = () => {
   
    const [foodName, setFoodName] = useState('');
    const [mealType, setMealType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [foodType, setFoodType] = useState('');
    const navigate=useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("thanks for donation");
        navigate('/');
        console.log('Form submitted:', { foodName, mealType, quantity, foodType });
    };

    return (
        <div className="foodDetails">
            <div className="form-container">
            <h1 className="main-heading">Food Details</h1>

                <form onSubmit={handleSubmit}>
                    
                        <label htmlFor="foodName">Food Name:</label>
                        <input
                            type="text"
                            id="foodName"
                            placeholder="Enter food name"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                        />
            

                
                        <label>Meal Type:</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="veg"
                                value="veg"
                                checked={mealType === 'veg'}
                                onChange={() => setMealType('veg')}
                            />
                            <label htmlFor="veg">Veg</label>
                        
                            <input
                                type="radio"
                                id="nonVeg"
                                value="nonVeg"
                                checked={mealType === 'nonVeg'}
                                onChange={() => setMealType('nonVeg')}
                            />
                            <label htmlFor="nonVeg">Non-Veg</label>
                    
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="text"
                            id="quantity"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Food Type:</label>
                        <div className="btn-group">
                            <button
                                className={`btnn ${foodType === 'rawFood' ? 'active' : ''}`}
                                onClick={() => setFoodType('rawFood')}
                                type="button"
                            >
                                Raw Food
                            </button>
                            <button
                                className={`btnn ${foodType === 'blurredCookedFood' ? 'active' : ''}`}
                                onClick={() => setFoodType('blurredCookedFood')}
                                type="button"
                            >
                                Blurred Cooked Food
                            </button>
                            <button
                                className={`btnn ${foodType === 'blurredPackedFood' ? 'active' : ''}`}
                                onClick={() => setFoodType('blurredPackedFood')}
                                type="button"
                            >
                                Blurred Packed Food
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="uploadImage">Upload Image:</label>
                        <input type="file" id="uploadImage" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FoodDetails;
