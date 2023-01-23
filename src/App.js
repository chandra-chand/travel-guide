import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelCard from './components/TravelCard'

import './App.css'

class App extends Component {
  state = {travelPlaces: [], isLoading: true}

  componentDidMount() {
    this.getPlaces()
  }

  getPlaces = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        description: each.description,
      }))
      this.setState({
        travelPlaces: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" height={50} width={50} color="#52bbf0" />
    </div>
  )

  renderSuccess = () => {
    const {travelPlaces} = this.state
    return (
      <ul className="un-ordered-container">
        {travelPlaces.map(each => (
          <TravelCard key={each.id} travelDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        <h1 className="head">Travel Guide</h1>
        <div className="travel-container">
          {isLoading ? this.renderLoader() : this.renderSuccess()}
        </div>
      </div>
    )
  }
}

export default App
