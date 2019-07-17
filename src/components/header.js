import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/global.css"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (

  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav id="nav">
    <ul className="container">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">Sample Page</ListLink>
      <ListLink to="/blogs">Blogs</ListLink>
      <ListLink to="/contact">Contact</ListLink>
    </ul>
    </nav>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
