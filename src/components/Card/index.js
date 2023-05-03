// import { useState } from 'react'
import './index.scss'

export default function Card({ title, imageUrl, body }) {
  // const [bodyCopy, setBodyCopy] = useState(body.split('').slice(0, 50))
  // const [isExpand, setIsExpand] = useState(false)
  // const handleExpand = () => {
  //   isExpand
  //     ? setBodyCopy(body.split(''))
  //     : setBodyCopy(body.split('').slice(0, 50))
  //   console.log(isExpand)
  //   setIsExpand((prev) => !prev)
  // }
  return (
    <>
      <div className="container-card">
        <div className="container-pic">
          <div>
            <div className="container-image">
              <img src={imageUrl} alt="" />
            </div>
            {/* <div className="card-content"> */}
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            {/* <div className="card-body">
            <p>{bodyCopy}</p>
          </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="card-body">
          <h3>Key Learning</h3>
          <p>{body}</p>
        </div>
      </div>
    </>
  )
}
