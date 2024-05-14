import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './home.css'

class Home extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
// instead of render() i can also use the const variable below for which i'ld need to remove the class Home and the render() above. Result seems to be the same  
// const Home = () => {
    return (
      <div>
        <h1 className="title">Welcome !!!! to our React Energizer</h1>
        <img src={'https://www.patterns.dev/img/reactjs/react-logo@3x.svg'} id='img_home'/> 
 
      </div> 
    )
  }
}

export default Home 