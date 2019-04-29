import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from './actions/index';
import './App.css';
import {Container, Button} from 'reactstrap';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

const App = ({dispatch}) => {
  return ( 
      <React.Fragment>
        <NavBar/>
        <Container>
          <div style={{float: "left"}}>
            <Counters />
            <Button color="success" className="btn-sm m-2" onClick={() => dispatch(resetCounter())}> Reset</Button>
          </div>
        </Container>
      </React.Fragment>
   );
}

export default connect()(App);
