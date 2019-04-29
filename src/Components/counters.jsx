import React from 'react';
import Counter from './counter';
import { connect } from 'react-redux';

const Counters = ({counters}) => {
    return ( 
        <div style={{float: "left"}}>
            {counters.map(counter =>
                <Counter key={counter.id}
                    counter={counter}
                />
            )}
        </div>
     );
}
 
export default connect(state => {
    return{
        counters: state
    }
})(Counters);