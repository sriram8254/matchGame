import './index.css'

const ImgItem = props => {
  const {imageDetails, imgClick} = props
  const {id, thumbnailUrl} = imageDetails
  const onImgClick = () => {
    imgClick(id)
  }
  return (
    <li className="img-container">
      <button className="img-button" type="button" onClick={onImgClick}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumb-img-css img-button"
        />
      </button>
    </li>
  )
}

export default ImgItem
