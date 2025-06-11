import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Navbar */}
      <NavBar />

      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Reach out with any questions or feedback!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <hr className="line" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
