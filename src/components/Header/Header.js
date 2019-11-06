import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <div className="header-container">
      <img src="/assets/header_img.jpg" className='header-img'/>
      <div className="info-div">
        <span>Location: Chennai</span>
        <span>Email: mehnazb3@gmail.com</span>
        <span>Contact: +91 9176702242</span>
      </div>
      {/* <Download/> */}
      <div className='btn-container'>
        <button className='primary-btn'>Download CV</button>
      </div>

      <div className='profile-container'>
        <img src="/assets/profile.png" className='profile-img'/>
        <h3>Mehnaz Bano</h3>
        <h6 className='yellow top-spacing'>Full Stack Developer</h6>
        <p><b>Born</b> - 26 March 1993</p>
        <p><b>Marrital Status</b> - Single</p>
        <p>F, P</p>
      </div>
    </div>
  )
}
export default Header;