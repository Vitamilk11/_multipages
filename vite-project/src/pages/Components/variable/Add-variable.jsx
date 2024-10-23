import React, { useState } from 'react';
import Variable from './variable.jsx'

function AddVariable() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div className='variables'>
      <h3>Add</h3>
      <div className='span'>
        <span className='btn btn-secondary ab'>A = <span>{count1}</span></span>
        <span className='btn btn-primary cc' >A + B =<span> {count1 + count2}</span></span>
        <span className='btn btn-secondary ab' >B =<span> {count2}</span></span>
      </div>

      <div className='variables-container'>
        <Variable type="int" name="A" count={count1} setCount={setCount1} />
        <Variable type="int" name="B" count={count2} setCount={setCount2} />
      </div>

    </div>
  );
}

export default AddVariable;