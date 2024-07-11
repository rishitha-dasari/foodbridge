import React, { useState } from "react";

const ContactComponent = () => {
 
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  return (
    <div>
    

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "20px", color: "black" }}>Contact Us</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>

            <div className="contactform" style={{ textAlign: "center" }}>
              <form className="contactform" action="feedback.php" method="post">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" style={{ width: "200px", height: "150px",border: "1px solid #ccc", borderRadius: "5px", padding: "5px"}}></textarea>
                <button
                  type="submit"
                  style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "10px 20px", cursor: "pointer" }}
                  name="send"
                >
                  Send
                </button>
              </form>
            </div>

          </div>
          <h2 style={{ marginBottom: "20px", color: "black" }}>Help & FAQs</h2>

       
          <div className="accordion-buttons" style={{ display: "flex", flexDirection: "column", alignItems: "center",textAlign:"center"}}>
            <button
              className="accordion-button"
              style={{ backgroundColor: "#add8e6", color: "#000", border: "none", borderRadius: "5px", width: "1200px" }}
              type="button"
              onClick={() => setIsOpenOne(!isOpenOne)}
            >
              How to donate food?
            </button>
            {isOpenOne && (
              <div className="accordion-body">
                <p>
                  1) Click on <a href="#">donate</a> in the home page
                </p>
                <p>2) Fill in the details</p>
                <p>3) Click on submit</p>
              </div>
            )}

            <button
              className="accordion-button"
              style={{ backgroundColor: "#add8e6", color: "#000", border: "none", borderRadius: "5px", width: "1200px" }}
              type="button"
              onClick={() => setIsOpenTwo(!isOpenTwo)}
            >
              How will my donation be used?
            </button>
            {isOpenTwo && (
              <div className="accordion-body" >
                <p style={{color:"black",width:"1200px"}}>
                  Your donation will be used to support our mission and the various programs and initiatives that we have in place. Your donation will help us to continue providing assistance and support to those in need. You can find more information about our programs and initiatives on our website. If you have any specific questions or concerns, please feel free to contact us
                </p>
              </div>
            )}

            <button
              className="accordion-button"
              style={{ backgroundColor: "#add8e6", color: "#000", border: "none", borderRadius: "5px",marginBottom:"20px", width: "1200px" }}
              type="button"
              onClick={() => setIsOpenThree(!isOpenThree)}
            >
              What should I do if my food donation is near or past its expiration date?
            </button>
            {isOpenThree && (
              <div className="accordion-body">
                <p style={{width:"1200px"}}>
                  We appreciate your willingness to donate, but to ensure the safety of our clients we can't accept food that is near or past its expiration date. We recommend checking expiration dates before making a donation or contact us for further guidance
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
