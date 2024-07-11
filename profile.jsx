import React from 'react';
import "./Profile.css"

const profile = () => {
  return (
    <div>
      <div style={{ margin: "0 auto", width: "80%", maxWidth: "800px", backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", backgroundImage: "linear-gradient(rgb(233, 92, 92), rgb(111, 180, 177))" }} className="profile">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: "20px" }} className="profilebox">
          <div style={{ flex: "1", padding: "20px", textAlign: "left" }} className="info">
            <p className="headingline">Profile</p>
            <p>Name: Rishitha</p>
            <p>Email: 22b01a1228@svecw.edu.in</p>
            <p>Gender: Female</p>
            <a href="index.html" style={{ backgroundColor: "#806abc", color: "white", border: "none", padding: "15px", fontSize: "20px", borderRadius: "8px", textDecoration:"none" }} className="btn custom-button mt-3">Logout</a>
          </div>
          <div style={{ flex: "1", padding: "20px" }} className="profile-img">
            <img src="https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922642xwzty.png" alt="profile" style={{ width: "250px", height: "180px", borderRadius: "10px" }} />
          </div>
        </div>
        <hr />
        <h1 style={{ marginTop: "30px", marginBottom: "10px", textAlign: "center", color:"darkblue" }} className="heading">Your Donations</h1>
        <div style={{ width: "100%", overflowX: "auto" }} className="table-container">
          <div className="table-wrapper">
            <table className="table" style={{ background: "#fff", color: "black", padding: "19px",border:"2px solid black"}}>
              <thead>
                <tr >
                  <th>Food</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Date/Time</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#fff", color: "black", padding: "19px" }}>
                  <td>Apples</td>
                  <td>Fruits</td>
                  <td>Organic</td>
                  <td>2023-02-05 10:30:00</td>
                </tr>
                <tr style={{ background: "#fff", color: "black", padding: "49px" }}>
                  <td>Bread</td>
                  <td>Bakery</td>
                  <td>Whole Grain</td>
                  <td>2023-02-07 15:45:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div></div></div>
  );
};

export default profile;