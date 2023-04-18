import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className=" blog-container">
    <div className="flex-row">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo-img"
      />
      <h1 className="nav-link-heading">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
