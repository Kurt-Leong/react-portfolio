import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoK from '../../assets/images/logo-k.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CV from '../../assets/images/CV-Kurt.pdf'
import {
  faEnvelope,
  faHome,
  faUser,
  faFolderOpen,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoK} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <div>
          <a
            activeclassname="active"
            className="CV-link"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
          </a>
        </div>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kurt-liang-b9a686a2/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kurt-Leong/"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
  )
}
