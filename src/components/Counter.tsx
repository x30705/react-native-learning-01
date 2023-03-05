import {useState} from 'react';

export const Counter = () => {

  const [count, setCount] = useState(5);

  const add = (increment: number) => {
    setCount(count + increment);
  }

  return (
    <>
        <h2>Couter: 
          <small>
            &nbsp; {count}
          </small>
        </h2>

        <button
          className="btn btn-primary"
          onClick={() => add(1)}>+1</button>

        &nbsp;
        
        <button
          className="btn btn-primary"
          onClick={() => add(-1)}>-1</button>
    </>
  )
}
