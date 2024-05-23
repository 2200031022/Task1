import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header id="navbar">
        <div className="logo">PRODIGY INFOTECH</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="section">
        <h1>Welcome to Prodigy Infotech</h1>
        <p>Prodigy Infotech is a leading technology solutions provider offering a wide range of services to help your business succeed in the digital age. We specialize in software development, IT consulting, and digital marketing. Our team of experts is dedicated to delivering innovative solutions tailored to your needs.</p>
      </section>
      <section id="services" className="section">
        <h1>Our Services</h1>
        <p>We offer a variety of services to meet your business needs:</p>
        <ul>
          <li><strong>Software Development:</strong> Custom software solutions to enhance your business operations.</li>
          <li><strong>IT Consulting:</strong> Expert advice to help you make the right technology decisions.</li>
          <li><strong>Digital Marketing:</strong> Strategies to boost your online presence and drive traffic to your website.</li>
          <li><strong>Cloud Services:</strong> Scalable cloud solutions for your business infrastructure.</li>
        </ul>
      </section>
      <section id="aboutus" className="section">
        <h1>About Us</h1>
        <p>Prodigy Infotech was founded in 2010 with a mission to provide innovative technology solutions to businesses of all sizes. Our team of professionals is passionate about technology and committed to delivering high-quality services to our clients. We believe in building long-term relationships based on trust and excellence.</p>
      </section>
      <section id="contactus" className="section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the following contact details:</p>
        <ul>
          <li><strong>Email:</strong> contact@prodigyinfotech.com</li>
          <li><strong>Phone:</strong> +123-456-7890</li>
          <li><strong>Address:</strong> 123 Tech Street, Innovation City, Techland</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
