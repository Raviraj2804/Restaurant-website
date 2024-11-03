import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to a dining experience where tradition meets innovation. At our restaurant, every dish tells a story – crafted from the freshest ingredients and inspired by culinary creativity. Our mission is to serve more than just food; we bring you flavors that excite, in an atmosphere that invites. Join us, and discover a new taste of modern cuisine.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our journey began with a vision to blend timeless flavors with a modern touch. Founded by food enthusiasts driven by passion and creativity, we set out to create a space where classic culinary traditions meet contemporary flair. From humble beginnings to a cherished dining destination, our story continues to evolve – one delicious dish at a time.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
