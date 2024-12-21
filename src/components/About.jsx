
import React from 'react';
import rest from '../assets/Rest.jpg'; // Correct import of the image

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Us</h1>
      <div className="about-us-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={rest} // Use the imported image variable
          alt="Restaurant Image"
          style={{ width: '50%', maxWidth: '300px', borderRadius: '10px' }}
        />
        <h2 style={{ marginTop: '20px' }}>Our Story</h2>
        <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
          Welcome to <strong>My Restaurant</strong>, a place where food meets passion. Founded in 2005, we have been serving delicious meals
          made from the freshest ingredients. What started as a small family-owned bistro in the heart of the city, has now grown into a
          beloved dining destination. Our chefs take pride in creating innovative dishes inspired by local and international cuisines.
        </p>
        <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
          Over the years, we have built a strong connection with our community, and our restaurant has become a staple for both locals and
          visitors. Our commitment to quality and service remains unwavering, and we continue to innovate, ensuring every meal is a
          memorable experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
