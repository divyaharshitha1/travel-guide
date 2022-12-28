import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from './components/TravelGuideItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    travelList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({travelList: updatedData, isLoading: true})
    }
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {travelList, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Travel Guide</h1>
        <hr className="line" />
        {isLoading ? (
          <ul className="travel-list">
            {travelList.map(eachItem => (
              <TravelGuideItem itemDetails={eachItem} key={eachItem.name} />
            ))}
          </ul>
        ) : (
          this.renderLoading()
        )}
      </div>
    )
  }
}
export default App
