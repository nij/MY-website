import React from "react"
import pangoOne from "../images/pangolin1.png"

const Header = () => (
  <header>
    <div className="title">
      <h1>Marina & Yann</h1>
      <h2>
        <div className="date">11/04/2020</div>
        <div className="location">île de Groix</div>
        <div class="pango">
          <img src={pangoOne} alt="Nope" />
        </div>
      </h2>

      <div className="scroll" />
    </div>
  </header>
)

export default Header
