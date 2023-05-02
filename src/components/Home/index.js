import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-k.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnumatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  function splitWord(str) {
    return str.split('')
  }
  const nameArray = splitWord('urt Liang')
  const jobArray = splitWord('web developer.')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone ">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp; <img src={LogoTitle} alt="developer" />
            <AnumatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnumatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={24}
            />
          </h1>
          <h2> Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
