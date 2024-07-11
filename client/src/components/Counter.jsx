import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

export default function Counter({ innerRef, start, isRunning }) {
  const [timer, setTimer] = useState(Date.now());

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    setTimer(Date.now());
  }, isRunning ? 10 : null);

  innerRef.current = format(timer - start, 'mm.ss.SS');

  return <h2>{format(timer - start, 'mm.ss.SS')}</h2>;
}
