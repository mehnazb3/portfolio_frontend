import React from 'react';
import {AimOutlined, PhoneOutlined, MailOutlined, HeartOutlined, FacebookFilled, GithubOutlined, LinkedinFilled, TwitterSquareFilled, MailFilled, InstagramFilled} from '@ant-design/icons'
import {UserImageWrapper, ProfileWrapper} from './styles'
const UserProfile = () => {
  return (
    <section>
      <UserImageWrapper>
        <button>
          Download CV
        </button>
        <ProfileWrapper>
          <img src="/assets/profile.png"/>
          <h2><strong>Mehnaz Bano</strong></h2>
          <h3 style={{color: '#21CEB5'}}>Full Stack Developer</h3>
          
          <ul>
            <li><b><MailOutlined /></b> - mehnazb3@gmail.com</li>
            <li><b><HeartOutlined /></b> - 26 March 1993</li>
            <li><b><PhoneOutlined /></b> - +91 9176702242</li>
            <li><b><AimOutlined /></b> - Dehrdaun, India</li>
            <br/>
            <li>
              <a href='#' style={{color: '#3b5998'}}><FacebookFilled /></a>
              <a href='#' style={{color: '#00acee'}}><TwitterSquareFilled /></a>
              <a href='#' style={{color: '#C13584'}}><InstagramFilled /></a>
              <a href='#' style={{color: '#D44638'}}><MailFilled /></a>
              <a href='#' style={{color: '#0072b1'}}><LinkedinFilled /></a>
              <a href='#' style={{color: '#211F1F'}}><GithubOutlined /></a>
            </li>
          </ul>
        </ProfileWrapper>
      </UserImageWrapper>
    </section>
  )
}
export default UserProfile;