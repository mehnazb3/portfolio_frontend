import styled from "styled-components"
export const UserImageWrapper = styled.div`
  height: 700px;
  background: linear-gradient(rgb(0 0 0 / 80%), rgb(0 0 0 / 72%)),
    url(/assets/profile.png);
  background-position: center;
  position: relative;
  background-attachment: fixed;
`

export const IntroText = styled.div`
  font-size: 16px;
  color: #e2e2e2;
  position: absolute;
  border-left: 1px solid #f8f8f8;
  padding-left: 20px;
  top: 70%;
  left: 50%;
  line-height: 40px;
  transform: translate(-50%, -50%);
  & b {
    font-size: 40px;
  }
  & li {
    & a {
      color: #e2e2e2;
    }
  }
`
