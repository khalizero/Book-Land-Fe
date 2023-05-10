import { useEffect, useRef } from 'react';



export function useCancelPromise() {
  const cancelPromise = useRef(false);
 
  // cancellng promise if a component unmounts

  useEffect(() => {
    return () => {
      cancelPromise.current = true;
    };
  }, []);

  return cancelPromise;
}
