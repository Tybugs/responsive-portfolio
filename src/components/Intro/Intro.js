import React, { useContext } from "react";
import "./intro.css";
import Avatar from "../../img/avatar.svg";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Fb from "../../img/Facebook.png";
import layers1 from "../../img/layers1.png";
import layers2 from "../../img/layers2.png";
import layers3 from "../../img/layers3.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          { /* darkmode  */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Marty Pabello</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, helping businesses and non-profits expand their capacity for impact. Working in product 
            strategys facilitation and prototyping with a solid background in interface
            design and front end development.

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
            <img src={Github} alt=""/>
          <img src={LinkedIn} alt="" />
          <img src={Fb} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={''} alt="" />
        <img src={''} alt="" />
        <img src={Avatar} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={layers1}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "69%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={layers2} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "15rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={layers3} text1="Best Design"  />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
