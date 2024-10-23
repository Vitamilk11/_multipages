
import './components.css';
import AddVariable from './variable/Add-variable.jsx';
import Counter from './counter/counter.jsx';
import Timer from './timer/Timer.jsx';
import Temperatures from './temperatures/temperatures.jsx';

function Components() {
    return ( 
        <div className='components-container'>
        <div className='App-container'>
        
        <div className='content'>
        <div className='item1'>
          <Counter value={0} />
          <Timer />
        </div>
        <div className='item2'>
          <AddVariable />
        </div>
        <div className='item3'>
          <Temperatures />
        </div>
        </div>
      </div>
      </div>
     );
}

export default Components;