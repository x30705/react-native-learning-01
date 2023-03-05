import { useState } from 'react';

export const useCounter = (initialCount: number = 100) => {

    const [count, setCount] = useState(initialCount);

    const add = (increment: number) => {
      setCount(count + increment);
    }
    
    return{
        count,
        add
    }
}
