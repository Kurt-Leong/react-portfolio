import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Card from '../Card'
import { useEffect, useState } from 'react'
import boardgame from '../../assets/images/boardgame.png'
import todo from '../../assets/images/todo.png'

import Loader from 'react-loaders'

export default function Projects() {
  function splitWord(str) {
    return str.split('')
  }
  const about = splitWord('Projects')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={about}
              index={15}
            />
          </h1>
          <p>
            Boardgame meetup is my most recent project, I am developer who
            always keen to learn new knowlege through doing projects, and I will
            update my projects regularly her. Feel free to ask me any questions!
          </p>
        </div>

        <div className="projects">
          <div className="project1">
            <a href="https://github.com/harakeke-2023/Gamestagram">
              <Card
                title="Group Project BoardGame meetup"
                imageUrl={`${boardgame}`}
                body={`For the tech skills, I learned how to use Tailwind and implement the Google API and auto-email-sending API. In addition, I gained a clearer insight into how to plan, initiate, and complete a project using the Agile method with a team. During this process, I learned how to communicate more effectively with the team and resolve conflicts, and most importantly, how to take care of everyone's well-being.`}
              />
            </a>
          </div>
          <div className="project2">
            <a href="http://todo-kurt-harekeke-23.devacademy.nz/">
              <Card
                title="Personal project full-stack todo"
                imageUrl={`${todo}`}
                body="This full-stack project has expanded my knowledge of both front-end and back-end development. On the back-end, I utilized Knex queries to handle the database, when using react to handle the data from the backend, I learnt using async thunk (Redux toolkit) to manage it asynchronously ."
              />
            </a>
          </div>
          {/* <div className="project3">
            <h2>Project 3</h2>
            <img src="" alt="" />
          </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
