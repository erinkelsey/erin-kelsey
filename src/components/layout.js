import * as React from "react"
// import { Link } from "gatsby"

import logo from "../images/logo.png"

// import { heading } from "./layout.module.css"
import "../styles/layout.sass"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="page-wrapper">
      <nav className="nav-bar">
        <img src={logo} alt="Logo" className="logo" />
        {/* <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul> */}
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
