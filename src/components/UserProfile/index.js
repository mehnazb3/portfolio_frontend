import React from "react"
import {
  AimOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartOutlined,
  FacebookFilled,
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
  MailFilled,
  InstagramFilled,
  ToolOutlined
} from "@ant-design/icons"
import { UserImageWrapper, IntroText } from "./styles"
const UserProfile = () => {
  return (
    <section>
      <UserImageWrapper>
        <IntroText>
          Hi, I'm<br/> <b>Mehnaz Bano</b><br/>I code cool websites.<ToolOutlined />
          <br/><br/>
          <ul>
            <li>
              <a href="#" className='fb-icon'>
                <FacebookFilled />
              </a>
              <a href="#">
                <TwitterSquareFilled />
              </a>
              <a href="#">
                <InstagramFilled />
              </a>
              <a href="#">
                <MailFilled />
              </a>
              <a href="#">
                <LinkedinFilled />
              </a>
              <a href="#">
                <GithubOutlined />
              </a>
            </li>
          </ul>
        </IntroText>
      </UserImageWrapper>
    </section>
  )
}
export default UserProfile
