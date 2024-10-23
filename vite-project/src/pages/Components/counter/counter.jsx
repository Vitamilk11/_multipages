import { useState } from 'react';

import './counter.css';

function Counter(props) {
    const [count, setCount] = useState(props.count || 0);
    return ( 
        <div className="counter">
            <h2>{props.name || 'Counter'}</h2>
            
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}> - </button>

            <span> {count} </span>

            <button className='btn btn-success' onClick={() => setCount(count + 1)}> + </button>

        </div>
     );
}

export default Counter;