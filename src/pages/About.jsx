import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/About.css";


export default function About() {
  return (
    <div className="about-container">
      <NavBar />

      <div className="about-image">
        <img src="/images/Landing.png" alt="Our Story" />
      </div>

      <hr className="line" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
