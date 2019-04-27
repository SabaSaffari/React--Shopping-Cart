import React, { Component } from 'react';
import {Button, Badge} from 'reactstrap';

class Counter extends Component {
   
    render() { 
        const {
            counter,
            onIncreament,
            onDelete
                } = this.props;
        return ( 
            <div>
                <Button color="primary" className="btn-sm" onClick={() => onIncreament(counter)}>
                    Add
                </Button>
                <Button color="danger" className="btn-sm m-2" onClick={() => onDelete(counter.id)}>
                    Delete
                </Button>
                <Badge color={this.getBadgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>
            </div>
         );
    }
    getBadgeColor(){
        return this.props.counter.value === 0 ? 'warning' : 'primary';
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? '0' : value;
    }
}
 
export default Counter;