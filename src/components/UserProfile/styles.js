import styled from "styled-components"
export const UserImageWrapper = styled.div`
  height: 400px;
  // background-image: url('/assets/header-tech.jpg');
  // experience_back_cover
  background-image: url('/assets/experience_back_cover.jpg');
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  & ul:first-child {
    top: 15%;
    position: absolute;
    background: linear-gradient( rgb(0 0 0 / 60%), rgba(0, 0, 0, 0.5) );
    width: 70%;
    margin-left: 15%;
    color: #fff;
    list-style: none;
    font-size: 15px;
    padding 10px;
    li {
      display: inline;
      margin-right: 10%;
    }
  }
  & button {
    position: absolute;
    top: 40%;
    background-color: #21CEB5;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    right: 15%;
  }
`

export const ProfileWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  top: 72%;
  height: 60%;
  width: 40%;
  margin-left: 30%;
  text-align: center;
  & h2 {
    margin-top: 5px;
    border-bottom: 1px solid #efefef;
  }
  & img {
    height: 150px;
    width: 150px;
    border-radius: 80px;
    margin-top: -15%;
    &:hover {
      transform: scale(1.01);
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    }
  }
`
