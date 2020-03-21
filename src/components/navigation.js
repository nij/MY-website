import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <nav>
    <Link to="/intro">#1 A lire en premier :)</Link>
    <Link to="/infos">#2 Infos et organisation</Link>
    <Link to="/transports">#3 Transports</Link>
  </nav>
)

export default Navigation
