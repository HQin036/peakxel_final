import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';
import logo from '../images/logo.webp';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
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

  const handleGetStartedClick = () => {
    navigate('/plans');
  };

  return (
    <>
      <main className="container-fluid hero-background">
        <section className="text-center d-flex flex-column align-items-center justify-content-center hero-section">
          <img src={logo} alt="PEAKXEL Logo" className="img-fluid mb-4 logo-image" />
          <div className="typing-effect-container mb-4">
            <Typing
              text={['Your Local Server Hosting Partner']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              cursorRenderer={cursor => <h1 className="main-title">{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 className="main-title">
                    {text}
                  </h1>
                );
              }}
            />
          </div>
        </section>
        <div className="divider"></div>
        <section className="why-choose-us-section text-center">
          <h2>Why choose us?</h2>
        </section>
        <section className="translucent-box">
          <Container>
            <div className="why-choose-us mt-4">
              <p>High-quality game server hosting services for Minecraft and beyond.</p>
              <p>Customized experience with 24/7 uptime and support.</p>
            </div>
            <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
