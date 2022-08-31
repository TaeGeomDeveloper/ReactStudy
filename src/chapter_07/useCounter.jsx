import React, {useState} from 'react';

function useCounter(initialValue){

  const [count, setCount] = useState(initialValue);
  const iscreaseCount = () => setCount((count)=> count+1);
  const decreaseCount = () => setCount((count)=> Math.max(count-1, 0));

  return [count, iscreaseCount, decreaseCount];
}

export default useCounter;