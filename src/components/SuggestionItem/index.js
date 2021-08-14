import './index.css'

const SuggestionItem = props => {
  const {item, triggered} = props
  const onTrigger = () => {
    triggered(item.id)
  }
  return (
    <li className="listItem">
      <p className="para">{item.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImage"
        onClick={onTrigger}
      />
    </li>
  )
}

export default SuggestionItem
