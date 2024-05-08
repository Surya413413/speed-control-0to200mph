import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prev => ({count: prev.count + 10}))
  }
  onDecrement = () => {
    this.setState(prev => ({count: prev.count - 10}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="imge-size"
        />
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="second-box">
          <h1 className="heading">"Speed is {count}mph"</h1>
          <p className="heading">"Min Limit is 0mph, Max Limit is 200mph"</p>
          <div>
            <button className="button1" onClick={this.onIncrement}>
              Accelerate
            </button>
            <button className="button2" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
