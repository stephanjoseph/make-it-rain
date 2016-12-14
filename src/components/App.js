import React, { Component } from 'react'
import style from './App.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      drops: [
        { x: 5,
          y: 10 },
        { x: 25,
          y: 105 }
      ]
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => this.animate(), 1000 / 30)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  clickHandler () {
    // Use this.setState to add a new item into drops { x: random, y: 0 }
    const drops = this.state.drops.map((drop) => {
      return { x: drop.x, y: drop.y + 1 }
          console.log('Clicked!')
  }

  animate () {
    // Use this.state.drops.map to return a new array of modified positions (e.g. y + 1)
    // then set that array with this.setState({ drops: thatArray })
    this.setState({ drops: drops })
  }

  render () {
    const drops = this.state.drops.map((drop, i) => {
      return <div className={style.drop} style={{ left: drop.x + 'px', top: drop.y + 'px' }} key={i} />
    })

    return <div>
      <button className={style.rain} onClick={() => this.clickHandler()}>Make it Rain!</button>
      <div className={style.drops}>
        {drops}
      </div>
    </div>
  }
}

export default App
