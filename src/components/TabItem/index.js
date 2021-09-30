import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, activeTab} = props
  const {tabId, displayText} = tabDetails
  const addTabState = activeTab ? 'active' : 'inActive'
  const updateTabId = () => {
    selectTab(tabId)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`${addTabState} tab-btn-name`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
