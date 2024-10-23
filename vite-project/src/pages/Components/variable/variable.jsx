
import './variable.css';

function Variable(props) {
    
    return ( 
        <div className="variable">

            <h2>{props.name || 'name'}</h2>

            <button className='btn btn-danger' onClick={() => props.setCount(props.count - 1)}> - </button>
            
            <span className='badge'> {props.type && props.type === 'int' ? props.count : props.count.toFixed(2)} </span>

            <button className='btn btn-success' onClick={() => props.setCount(props.count + 1)}> + </button>

        </div>

     );
}

export default Variable;