// // Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  subscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state

    let text = isSubscribe ? 'Subscribe' : 'Subscribed'

    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <button className="button" type="button" onClick={this.subscribe}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
