import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    render() { 
        const{
            onDelete,
            onIncreament,
            counters
        } = this.props;
        return ( 
            <div style={{float: "left"}}>
                {counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                        onIncreament={onIncreament}
                        onDelete={onDelete}
                    />
                )}
            </div>
         );
    }
}
 
export default Counters;