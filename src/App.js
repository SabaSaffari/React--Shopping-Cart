import React, {Component} from 'react';
import './App.css';
import {Container, Button} from 'reactstrap';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
  state ={
    counters: [
        {id:1, value: 0},
        {id:2, value: 0},
        {id:3, value: 0},
        {id:4, value: 0},
        {id:5, value: 0}
    ]
  }
  handleIncreament = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters}); 
  }
  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
      this.setState({counters});
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <Container>
          <div style={{float: "left"}}>
            <Counters 
              counters={this.state.counters}
              onIncreament={this.handleIncreament} 
              onDelete={this.handleDelete}
            />
            <Button color="success" className="btn-sm m-2" onClick={this.handleReset}> Reset</Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
