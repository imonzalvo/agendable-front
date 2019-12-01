import { useEffect, useRef } from 'react';
import isNumber from 'lodash/isNumber';

/**
 * Call a setTimeout properly.
 * @param callback the callback to be ... called back
 * @param delay the setTimeout delay
 */
export default function useTimeout(callback: () => void, delay: number) {
  const timeoutRef = useRef(-1);
  const clear = () => clearTimeout(timeoutRef.current);

  // need to use this to clear timeouts on unmount
  useEffect(() => clear, []);

  return {
    clear,
    callTimeout: (newDelay?: number) => {
      clear();
      timeoutRef.current = setTimeout(callback, isNumber(newDelay) ? newDelay : delay);
    },
  };
}
