import React from 'react';

const LeftSideNavbar = () => {
    return (
        <div style={{ height: '100vh' }}>
            <style>
                {`
                body {
                    background: linear-gradient(rgb(111, 180, 177), rgb(233, 92, 92));
                    background-size: cover;
                    background-attachment: fixed;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    height: 100vh; /* Ensure body covers full viewport height */
                }

                .main {
                    margin-left: 50px; /* Adjust margin-left to move boxes to the left */
                    padding: 20px;
                    height: 100%; /* Ensure main div covers full parent height */
                    position: relative; /* Set position to relative for absolute positioning of the image */
                }

                .boxes {
                    display: flex;
                    flex-direction: row;
                }

                .box1, .box2, .box3 {
                    width: calc(33.33% - 20px);
                    margin: 0 10px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    border-radius: 15px; /* Adding rounded edges */
                }

                .box1 {
                    background-color: skyblue;
                }

                .box2 {
                    background-color: #ffe4b5; /* Biscuit color */
                }

                .box3 {
                    background-color: #e6e6fa; /* Light purple */
                }

                h1 {
                    color: white;
                    text-align: center;
                }

                h2, span {
                    color: black;
                }

                img {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    max-width: 700px; 
                    height: 500px;
                }
                `}
            </style>
           
            <div className="main">
                <h1>Dashboard</h1>
                <div className="boxes">
                    <div className="box1">
                        <h2>Total Users</h2>
                        <span>0</span>
                    </div>
                    <div className="box2">
                        <h2>Feedbacks</h2>
                        <span>0</span>
                    </div>
                    <div className="box3">
                        <h2>Total Donates</h2>
                        <span>0</span>
                    </div>
                </div>
                <img src='https://th.bing.com/th/id/OIP.2xBG3I4I52zpg-dNeXrWlgHaEE?rs=1&pid=ImgDetMain' alt="Sample" />
            </div>
        </div>
    );
};

export default LeftSideNavbar;
