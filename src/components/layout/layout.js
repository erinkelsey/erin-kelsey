import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"

import { heading } from "./layout.module.css"

import { navBar, pageWrapper } from "./layout.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={pageWrapper}>
      <nav className={navBar}>
        <img src={logo} alt="Logo" width="40px" />
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
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
