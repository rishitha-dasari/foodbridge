import React from "react";
import { Link } from "react-router-dom";
import "./donorpage.css";
const donorpage = () => {
  return (
    <div className="donorpage">
      <img
        src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
        alt="kids"
        height= "500px"
        width="800px"
      ></img>
      <Link to="/fooddonate">
        <button className="donorbutton">DONATE</button>
      </Link>
      <p>  “Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.”</p>
    </div>
  );
};

export default donorpage;
