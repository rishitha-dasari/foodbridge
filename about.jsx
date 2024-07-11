import React from 'react';

const about = () => {
    return (
        <div>
             <h1 className="title" style={{color:'black',fontSize:40}}><center>"Welcome to FOOD BRIDGE"</center></h1>
      <br />
      <div style={{ textAlign: "center", paddingLeft: "250px", paddingRight: "250px" ,}}>
        <h1 style={{color:'black',fontSize:40}}>ABOUT US</h1>
        <br />
        <p style={{ fontSize: "20px", fontFamily: "Helvetica, sans-serif",color:'black' }}>
          FOOD BRIDGE is a student-led initiative dedicated to combating food waste and alleviating hunger in our communities. With a passionate team of students, we're committed to making a meaningful impact by redistributing surplus food from local businesses to those in need.
          <br /><br />
          Driven by our belief in the power of collective action, we strive to foster a culture of sustainability and compassion. Through strategic partnerships and innovative solutions, we aim to ensure that no edible food goes to waste while simultaneously addressing food insecurity.
          <br /><br />
          Our mission is simple yet impactful: to transform surplus into sustenance, waste into welfare, and hunger into hope. By raising awareness, promoting education, and advocating for change, we're working towards a future where everyone has access to nutritious food and where no one goes to bed hungry.
          <br /><br />
          Join us in our journey to create a world where every meal is a celebration of abundance and where no one is left behind.
        </p>
      </div>
      <br />
      <br />
      <div className="map" style={{ textAlign: "center", paddingBottom: "50px" }}>
        <p style={{ fontSize: "30px" }}>Location</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.3820260981136!2d81.52675751430174!3d16.562907688626298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3976c44a708b15%3A0xd8039d94f62502bf!2sShri%20Vishnu%20Engineering%20College%20for%20Women!5e0!3m2!1sen!2sin!4v1644012904639!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
      </div>
        </div>
    );
};

export default about;