import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  showFirstName = () => {
    this.setState(previous => ({firstname: !previous.firstname}))
  }

  showLastName = () => {
    this.setState(previous => ({lastname: !previous.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="names-button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstname && <p className="para-text">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="names-button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {lastname && <p className="para-text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
