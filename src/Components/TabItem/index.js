import './index.css'

const TabItem = props => {
  const {tabDetails, activeCheck, tabClick} = props
  const {tabId, displayText} = tabDetails
  const checkCSS = activeCheck ? 'active-css' : ''
  const onTabClick = () => {
    tabClick(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-heading ${checkCSS}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
