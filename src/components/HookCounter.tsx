import { useCounter } from "../hooks/useCounter"

export const HookCounter = () => {

  const {count, add} = useCounter();

  return (
    <>
        <h2>Hook Counter: 
          <small>
            &nbsp; {count}
          </small>
        </h2>

        <button
          className="btn btn-primary"
          onClick={() => add(-1)}>-1</button>

        &nbsp;
        
        <button
          className="btn btn-primary"
          onClick={() => add(1)}>+1</button>

    </>
  )
}
