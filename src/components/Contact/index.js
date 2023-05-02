import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Contact() {
  function splitWord(str) {
    return str.split('')
  }
  const contact = splitWord('Contact Me')

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_ndvlcfj',
        'template_xlfpk36',
        refForm.current,
        'fVrE8VI4v-dStAqC-'
      )
      .then(
        () => {
          alert('Message successfully sent!')

          // window.location.reload(false)
        },
        () => {
          alert('Failed to send the Email, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contact}
              index={15}
            />
          </h1>
          <p>
            I am intereted in full-stack web development, and having
            enthusiastic to learn new thing, please feel free to contact me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    required
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kurt Liang
          <br />
          Auckland, New Zealand
          <br />
          <span>liangke1991@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[-36.85166188079175, 174.72664348629715]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-36.85166188079175, 174.72664348629715]}>
              <Popup>Come over for a cup of coffee ;)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
