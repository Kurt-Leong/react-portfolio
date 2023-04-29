import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

export default function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone ">
          <h1>
            Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            liang
            <br />
            Web developer
          </h1>
          <h2> Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}
