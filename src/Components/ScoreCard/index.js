import './index.css'

const ScoreCard = props => {
  const {scoreDetails, resetClick} = props
  const {score} = scoreDetails
  const onResetClick = () => {
    resetClick()
  }

  return (
    <div className="score-win-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-css"
      />
      <p className="score-win-heading">YOUR SCORE</p>
      <p className="score-win-heading-score">{score}</p>

      <button className="play-btn-css" type="button" onClick={onResetClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="play-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
