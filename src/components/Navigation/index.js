import React from "react"
import { ListWrapper } from "./styles"
const Navigation = () => {
  return (
    <header
      style={{
        position: "fixed",
        width: "90%",
        top: "0%",
        backgroundColor: "#fff",
        zIndex: "1000",
      }}
    >
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
            <a href="#certifications">Certifications</a>
          </li>
        </ListWrapper>
      </nav>
      <div class="clearfix"></div>
    </header>
  )
}
export default Navigation
