import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestionsList extends Component {
  state = {searchInput: '', suggestionList: null}

  triggered = id => {
    const {suggestionsList} = this.props
    const unList = suggestionsList.filter(eachItem => eachItem.id === id)
    if (unList !== undefined) {
      this.setState({searchInput: unList[0].suggestion})
    }
  }

  changeState = event => {
    this.setState({searchInput: event.target.value})
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )
    this.setState({suggestionList: filteredList})
  }

  render() {
    const {searchInput, suggestionList} = this.state
    const {suggestionsList} = this.props
    let element
    if (suggestionList === null) {
      element = suggestionsList
    } else {
      element = suggestionList
    }

    return (
      <div className="mainContainer">
        <div className="imageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
        </div>
        <div className="contentContainer">
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              value={searchInput}
              onChange={this.changeState}
            />
          </div>
          <ul className="list">
            {element.map(eachItem => (
              <SuggestionItem
                item={eachItem}
                key={eachItem.id}
                triggered={this.triggered}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestionsList
