import React, {Component} from 'react';
import './App.css';

// started app class and set state properties, I plan to create a class  containing the state, then create three functions for start, stop and reset. Then create a timer function, after that test each function to make sure they all work togrther. I'm using the logic provided underneath from a previous in class exercise called favorite language, It was about incrementing the count, also my main resource was the time spent during office hours with Jade that was very helpul.
// Finally for the styling I am using CSS with flexbox, display flex, space-around, some background colors, and for the children I used flex grow I was just experimenting and I found it really useful.//

class App extends Component {
  constructor(){
    super()
    this.state = {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      timeOn: false
    }
  }
//Creating functions for start, stop and reset the time//

startTime = () => {
  this.setState({
    timeOn: this.timer()
  })
};

stopTime = () => {
  clearInterval(this.state.timeOn)
};

resetTime = () => {
  this.setState({
    milliseconds: 0,
    seconds: 0,
    minutes:0
  });
};

//Creating main clock timer function//

timer = () => {
  let timer = setInterval( () => {
    this.setState(state => {
      return {milliseconds: state.milliseconds + 1}
    });

    if(this.state.milliseconds > 9) {
      this.setState(state => {
        return {
          milliseconds: state.milliseconds = 0,
          seconds: state.seconds + 1
        }
      })
    }

    if(this.state.seconds > 59) {
      this.setState(state => {
        return {
          minutes: state.minutes + 1, seconds: 0
        }
      })
    }
  }, 100);
    return timer;
}

render() {
  return(
    <div className='container'>
      <h1 className='h1'>Stopwatch</h1>
      <div className='minutes'>{this.state.minutes} : {this.state.seconds} : {this.state.milliseconds}</div>

      <div className='buttons'>
        <button className='button1' onClick={this.startTime}>Start</button>
        <button className='button2' onClick={this.stopTime}>Stop</button>
        <button className='button3' onClick={this.resetTime}>Reset</button>
      </div>
    </div>
  );
}
}

export default App;
