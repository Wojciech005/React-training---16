class Clock extends React.Component {
  state = {
    result: 1,
    ratio: 2
  } 

  handleMultiplication = () => {
    this.setState({
      result: this.state.result * this.state.ratio
    })
  }

  componentDidUpdate() {
    if(this.state.result > 1000 && this.state.ratio === 2) {
      this.setState({
        ratio: 0.5
      }) 
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      this.setState({
        ratio: 2
      })
    }
  }
  
render() {
  return (
    <div>
      <p>If number is bigger as 1000 - start multiplying by 2. If number is smaller as 1 - start multiplying by 0.5 </p>
      <button onClick = {this.handleMultiplication}>{`Multiply by ${this.state.ratio}`}</button>
      <h1>{`score: ${this.state.result}`}</h1>
    </div>
  )
}
}

ReactDOM.render(<Clock />, document.getElementById('root'))