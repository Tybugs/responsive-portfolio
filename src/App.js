import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Intro from "./components/Intro/Intro"
import Services from "./components/Services/Services";
import './App.css'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Services />
=======
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
>>>>>>> ae03c44c43a760df503c32aea68d3b32b761d6d6
    </div>
  );
}

export default App;
