import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

export default function About() {
  function splitWord(str) {
    return str.split('')
  }
  const about = splitWord('About me')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={about}
            index={15}
          />
        </h1>
        <p>
          Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Elit
          ullamcorper dignissim cras tincidunt lobortis. Fusce id velit ut
          tortor pretium. Tortor posuere ac ut consequat semper viverra nam
          libero justo. Amet nulla facilisi morbi tempus iaculis. Ipsum faucibus
          vitae aliquet nec ullamcorper sit amet risus nullam. Nulla facilisi
          morbi tempus iaculis urna. Amet nisl suscipit adipiscing bibendum est
          ultricies integer quis. Lorem dolor sed viverra ipsum nunc aliquet
          bibendum. Eget mauris pharetra et ultrices neque ornare. Id cursus
          metus aliquam eleifend mi. Ut venenatis tellus in metus vulputate. Id
          neque aliquam vestibulum morbi. Amet consectetur adipiscing elit duis.
          Lacus vestibulum sed arcu non odio euismod lacinia at quis. Lectus
          urna duis convallis convallis tellus id. Eu augue ut lectus arcu
          bibendum at varius. Eget mauris pharetra et ultrices neque ornare
          aenean. Enim sit amet venenatis urna cursus eget. Egestas purus
          viverra accumsan in nisl nisi scelerisque eu.
        </p>
        <p>
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
          Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. In
          vitae turpis massa sed elementum tempus. Congue mauris rhoncus aenean
          vel elit scelerisque mauris. Vel orci porta non pulvinar. Fermentum
          posuere urna nec tincidunt praesent semper feugiat nibh. Urna
          porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          Cras pulvinar mattis nunc sed blandit libero. Amet porttitor eget
          dolor morbi non arcu risus quis varius. Quam nulla porttitor massa id
          neque aliquam. Faucibus a pellentesque sit amet porttitor eget dolor
          morbi. Vitae turpis massa sed elementum tempus egestas. Duis convallis
          convallis tellus id interdum velit laoreet id donec. In eu mi bibendum
          neque. Sit amet risus nullam eget felis eget.
        </p>
        <p>
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
          Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. In
          vitae turpis massa sed elementum tempus. Congue mauris rhoncus aenean
          vel elit scelerisque mauris. Vel orci porta non pulvinar. Fermentum
          posuere urna nec tincidunt praesent semper feugiat nibh. Urna
          porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          Cras pulvinar mattis nunc sed blandit libero. Amet porttitor eget
          dolor morbi non arcu risus quis varius. Quam nulla porttitor massa id
          neque aliquam. Faucibus a pellentesque sit amet porttitor eget dolor
          morbi. Vitae turpis massa sed elementum tempus egestas. Duis convallis
          convallis tellus id interdum velit laoreet id donec. In eu mi bibendum
          neque. Sit amet risus nullam eget felis eget.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}
