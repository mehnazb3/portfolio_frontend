import React from "react"
import { ListWrapper, Logo } from "./styles"
const Navigation = () => {
  return (
    <header
      style={{
        position: "fixed",
        width: "90%",
        top: "0%",
        display: "inline",
        backgroundColor: "#fff",
        zIndex: "1000",
      }}
    >
      <Logo>M.Bano</Logo>
      <nav>
        <ListWrapper>
          <li>
            <a href="#about_me">About me</a>
          </li>
          <li>
            <a href="#work_experience">Work Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#education">Certifications</a>
          </li>
        </ListWrapper>
      </nav>
    </header>
  )
}
export default Navigation
