import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
   import Node from "../../img/node-js.png";
   import Redux from "../../img/redux.png";
   import RLogo from "../../img/react.png";
   import Vscode from "../../img/vscode.png";
   import Git from "../../img/git.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Essentials Tools for
          </span>
          <span>Web Development</span>
          <spane>
            The power of highly tested libraries to improve our workflow and
            <br />
            benefit from greater possibilities when it comes to responsive design
            <br />
            features to create a more attractive web design layout.
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={RLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Vscode} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
