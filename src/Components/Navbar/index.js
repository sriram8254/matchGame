import './index.css'

const Navbar = props => {
  const {navDetails} = props
  const {score, seconds} = navDetails
  return (
    <ul className="navContainer">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="nav-logo-css"
        />
      </li>
      <li className="score-time-container">
        <div className="score-container">
          <p className="score-heading">Score:</p>
          <p className="span-css">{score}</p>
        </div>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timmer-icon-css"
          />
          <p className="span-css">{seconds} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
